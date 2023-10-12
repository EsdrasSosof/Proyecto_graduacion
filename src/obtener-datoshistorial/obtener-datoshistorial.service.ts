import { Injectable } from '@nestjs/common';
import { ObtenerDatosHistorialRepository } from './repository/obtener-datoshistorial.repository';

@Injectable()
export class ObtenerDatoshistorialService {

    constructor(private readonly obtenerDatosHistorialRepository: ObtenerDatosHistorialRepository) {}

    async datoshistorial() {
        return await this.obtenerDatosHistorialRepository.datoshistorial();
      }
}
