import { Controller, Get } from '@nestjs/common';
import { ObtenerDatoshistorialService } from './obtener-datoshistorial.service';

@Controller('obtener-datoshistorial')
export class ObtenerDatoshistorialController {
  constructor(private readonly obtenerDatoshistorialService: ObtenerDatoshistorialService) {}

  @Get()
  datoshistorial() {
    return this.obtenerDatoshistorialService.datoshistorial();
  }
}
