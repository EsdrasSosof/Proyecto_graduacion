import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MedConsultationEntity } from '../../med_consultations/entities';
import { Repository } from 'typeorm';
import { format, subDays } from 'date-fns'; // Usamos la librería date-fns para manejar fechas.



@Injectable()
export class GraphConsultationRepository {
    constructor(
        @InjectRepository(MedConsultationEntity)
        private readonly medConsultationRepository: Repository<MedConsultationEntity>,) {}
    
    // async countConsultationsLast5Days(): Promise<number> {
    //     const currentDate = new Date();
    //     const fiveDaysAgo = subDays(currentDate, 5);
    
    //     const queryBuilder = this.medConsultationRepository.createQueryBuilder(
    //         'consultation',
    //     );
    
    //     const count = await queryBuilder
    //         .where('consultation.date_consultation >= :fiveDaysAgo', {
    //         fiveDaysAgo: format(fiveDaysAgo, 'yyyy-MM-dd'),
    //         })
    //         .andWhere('consultation.date_consultation <= :currentDate', {
    //         currentDate: format(currentDate, 'yyyy-MM-dd'),
    //         })
    //         .getCount();
    
    //     return count;
    // }

    async countConsultationsLast5Days(): Promise<{ date: string; count: number }[]> {
        const currentDate = new Date();
        const fiveDaysAgo = subDays(currentDate, 5);
    
        const queryBuilder = this.medConsultationRepository.createQueryBuilder(
          'consultation',
        );
    
        const results = await queryBuilder
          .select(['DATE(consultation.date_consultation) as date', 'COUNT(*) as count'])
          .where('consultation.date_consultation >= :fiveDaysAgo', {
            fiveDaysAgo: format(fiveDaysAgo, 'yyyy-MM-dd'),
          })
          .andWhere('consultation.date_consultation <= :currentDate', {
            currentDate: format(currentDate, 'yyyy-MM-dd'),
          })
          .groupBy('date')
          .getRawMany();
    
        // Mapeamos los resultados para devolver un objeto con date y count
        const mappedResults = results.map((result) => ({
          date: result.date,
          count: parseInt(result.count),
        }));
    
        return mappedResults;
      }
}