import { Appointment } from "../../entities/appointment/appointment"
import { AppointmentRepository } from "../../repositories/apointment-repository/apointment-repository"

interface CreateApointimentRequest {
  customer: string
  startsAt: Date
  endsAt: Date
}

type CreateApointmentResponse = Appointment



export class CreateApointiment {

  constructor(
    private appointmentsRepository: AppointmentRepository
  ) { }

  //Destructuring for get the necessary and right data
  async execute({ customer, endsAt, startsAt }: CreateApointimentRequest): Promise<CreateApointmentResponse> {

    const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(startsAt, endsAt)

    if (overlappingAppointment) {
      throw new Error('Another appointment overlaps this appointment dates')
    }

    const appointment = new Appointment({ customer, endsAt, startsAt });

    await this.appointmentsRepository.create(appointment)

    return appointment
  }

}