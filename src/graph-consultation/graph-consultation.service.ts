import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { format, subDays } from 'date-fns'; // Usamos la librería date-fns para manejar fechas.
import { MedConsultationEntity } from '../med_consultations/entities';
import { GraphConsultationRepository } from './repository/graph-consultation.repository';

@Injectable()
export class GraphConsultationService {
    constructor(private readonly graphConsultationRepository: GraphConsultationRepository) {}

    async countConsultationsLast5Days() {
        return await this.graphConsultationRepository.countConsultationsLast5Days();
      }
}
