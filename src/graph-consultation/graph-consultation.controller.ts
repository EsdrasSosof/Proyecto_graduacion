import { Controller, Get } from '@nestjs/common';
import { GraphConsultationService } from './graph-consultation.service';

@Controller('graph-consultation')
export class GraphConsultationController {
  constructor(private readonly graphConsultationService: GraphConsultationService) {}

  // @Get('countLast5Days')
  // async countConsultationsLast5Days(): Promise<number> {
  //   return this.graphConsultationService.countConsultationsLast5Days();
  // }
  // // async getGraphData(): Promise<any> {
  // //     // Lógica para generar los datos de la gráfica
  // //     const graphData = await this.graphService.generateGraphData();
  // //     return graphData;
  // //   }

  @Get()
  countConsultationsLast5Days() {
    return this.graphConsultationService.countConsultationsLast5Days();
  }
}
