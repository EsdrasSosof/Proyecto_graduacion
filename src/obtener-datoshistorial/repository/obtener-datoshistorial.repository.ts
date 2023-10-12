import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { format, subDays } from 'date-fns'; // Usamos la librería date-fns para manejar fechas.
import { MedRecordEntity } from '../../med_records/entities';



@Injectable()
export class ObtenerDatosHistorialRepository {
    constructor(
        @InjectRepository(MedRecordEntity)
        private readonly medConsultationRepository: Repository<MedRecordEntity>,) {}

    async datoshistorial(): Promise<{ date: string; count: number }[]> {
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