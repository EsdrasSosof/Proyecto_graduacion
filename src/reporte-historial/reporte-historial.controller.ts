import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ReporteHistorialService } from './reporte-historial.service';

@Controller('reporte-historial')
export class ReporteHistorialController {
  constructor(private readonly reporteHistorialService: ReporteHistorialService) {}

  //Este funciona para un PDF genérico
  // @Get()
  // async downloadPDF(@Res() res): Promise<void> {
  //   const buffer = await this.reporteHistorialService.generarPDF();

  //   res.set({
  //     'Content-Type': 'application/pdf',
  //     'Content-Disposition': 'attachment; filename=example.pdf',
  //     'Content-Length': buffer.length,
  //   })

  //   res.end(buffer);
  // }

  @Get(':id')
  async downloadPDF(@Param('id') id: number, @Res() res: Response): Promise<void> {
    const buffer = await this.reporteHistorialService.generarPDF(id);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=example.pdf',
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }
}