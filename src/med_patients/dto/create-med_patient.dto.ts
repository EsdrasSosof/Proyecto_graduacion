export class CreateMedPatientDto {
    patient_id: number;
    identification: number;
    first_name: string;
    second_name: string;
    lastame: string;
    second_lastame: string;
    dof: Date;
    address: string;
    phone: number;
    email: string;
    date_created: Date;
    date_updated: Date;
}
