import { Injectable } from '@nestjs/common';
import { resolve } from 'path';
const PDFDocument = require('pdfkit-table');
//import { MedRecordEntity } from '../med_records/entities';
// import { MedRecordRepository } from '../med_records/repository/med_record.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MedRecordEntity } from '../med_records/entities';
import { Repository } from 'typeorm';
import { MedRecordsService } from '../med_records/med_records.service';


@Injectable()
export class ReporteHistorialService {

    // constructor(
    //     @InjectRepository(MedRecordRepository)
    //     private readonly medRecordsRepository: MedRecordRepository) {}

    //Funciona para un PDF genérico//
    // async generarPDF(): Promise<Buffer>{
    //     const pdfBuffer: Buffer = await new Promise( resolve => {
    //       const doc =  new PDFDocument(
    //         {
    //           size: "LETTER",
    //           bufferPages: true
    //         })
  
    //         //cuerpo del documento
    //         doc.text("PDF Generado en nuestro servidor");
    //         doc.moveDown();
    //         doc.text("Esto es un ejemplo de como generar un pdf en nuestro servidor nestjs");
  
  
    //         const buffer = []
    //         doc.on('data', buffer.push.bind(buffer))
    //         doc.on('end', () => {
    //             const data = Buffer.concat(buffer)
    //             resolve(data)
    //         })
    //         doc.end()
    //     })
    //     return pdfBuffer;
    // }

    //Funciona y muestra la info básica
  //   constructor(
  //     private readonly medRecordService: MedRecordsService) {}

  // async generarPDF(id: number): Promise<Buffer> {
  //   // Consulta la base de datos para obtener los datos de la tabla 'medrecords'
  //   const medRecord = await this.medRecordService.findOne(id);

  //   if (!medRecord) {
  //     throw new Error(`No se encontró un registro con el ID ${id}`);
  //   }

  //   // Crea el PDF con los datos obtenidos
  //   const pdfBuffer = await new Promise<Buffer>((resolve) => {
  //     const doc = new PDFDocument({
  //       size: 'LETTER',
  //       bufferPages: true,
  //     });

  //     doc.text('Reporte de Historial Médico', { align: 'center' });
  //     doc.moveDown();
  //     doc.text(`ID del registro: ${medRecord.record_id}`);
  //     doc.text(`Fecha de creación: ${medRecord.date_created}`);
  //     doc.text(`Fecha de actualización: ${medRecord.date_updated}`);
  //     // Agrega más datos del registro según sea necesario

  //     const buffers: Buffer[] = [];
  //     doc.on('data', (buffer) => buffers.push(buffer));
  //     doc.on('end', () => {
  //       const data = Buffer.concat(buffers);
  //       resolve(data);
  //     });
  //     doc.end();
  //   });

  //   return pdfBuffer;
  // }

  //Muestra la información de las relaciones

      constructor(
      private readonly medRecordService: MedRecordsService) {}
      
      async generarPDF(id: number): Promise<Buffer> {
        // Consulta la base de datos para obtener los datos de la tabla 'medrecords' con la relación 'medPatient'
        const medRecord = await this.medRecordService.findOneWithRelations(id);
      
        if (!medRecord) {
          throw new Error(`No se encontró un registro con el ID ${id}`);
        }
    
        // Crea el PDF con los datos obtenidos
        const pdfBuffer = await new Promise<Buffer>((resolve) => {
          const doc = new PDFDocument({
            size: 'LETTER',
            bufferPages: true,
          });
    
          doc.text('Reporte de Historial Médico', { align: 'center' });
          doc.moveDown();
          doc.text(`ID del registro: ${medRecord.record_id}`);
          doc.text(`Fecha de creación: ${medRecord.date_created}`);
          doc.text(`Fecha de actualización: ${medRecord.date_updated}`);
    
          // Agrega datos de la relación 'medPatient' si está presente
          if (medRecord.patient_id) {
            doc.text(`Número de identidicación: ${medRecord.patient_id.identification}`);
            doc.text(`Nombre del paciente: ${medRecord.patient_id.first_name}`);
            doc.text(`Segundo Nombre del paciente: ${medRecord.patient_id.second_name}`);
            doc.text(`Apellido del paciente: ${medRecord.patient_id.lastame}`);
            doc.text(`Segundo Apellido del paciente: ${medRecord.patient_id.second_lastame}`);
            doc.text(`Fecha de nacimiento: ${medRecord.patient_id.dof}`);
            doc.text(`Dirección del paciente: ${medRecord.patient_id.address}`);
            doc.text(`Teléfono del paciente: ${medRecord.patient_id.phone}`);
            doc.text(`Correo del paciente: ${medRecord.patient_id.email}`);
          }
          if (medRecord.consultation_id){
            doc.text(`Fecha de la consulta: ${medRecord.consultation_id.date_consultation}`);
          }
          if (medRecord.correlative_id){
            doc.text(`Sintomas presentados: ${medRecord.correlative_id.symptom_detail}`);
            doc.text(`Enfermedades Pre-existentes: ${medRecord.correlative_id.pre_existing}`);
            doc.text(`Enfermedades detectadas: ${medRecord.correlative_id.Detected_disease}`);
          }
          if (medRecord.prescription_id){
            doc.text(`Dosis Recetada: ${medRecord.prescription_id.dose}`);
          }
    
          // Agrega más datos del registro según sea necesario
          const buffers: Buffer[] = [];
          doc.on('data', (buffer) => buffers.push(buffer));
          doc.on('end', () => {
            const data = Buffer.concat(buffers);
            resolve(data);
          });
          doc.end();
        });
    
        return pdfBuffer;
      }
}