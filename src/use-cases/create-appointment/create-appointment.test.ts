import { describe, expect, it } from "vitest";
import { CreateApointiment } from "./create-appointment";
import { Appointment } from "../../entities/appointment/appointment";
import { getFutureDate } from "../../tests/utils/get-future-date/get-future-date";
import { InMemoryApointmentRepository } from "../../repositories/in-memory/in-memory-appointments-repository";



//Completely descriptive test
describe('Create Appointment', () => {

  it('should be able to create an appointment', async () => {
    const appointmentRepository = new InMemoryApointmentRepository()
    const createApointiment = new CreateApointiment(appointmentRepository)

    const startsAt = getFutureDate('2025-06-10');
    const endsAt = getFutureDate('2025-06-11');

    //Create a appointment - Wait the promisse resolves - Promisse result should be a instance of Appointment
    await expect(createApointiment.execute({
      customer: "Taros",
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Appointment)
  })


  it('should not be able to create an appointment with overlapping dates', async () => {
    const appointmentRepository = new InMemoryApointmentRepository()
    const createApointiment = new CreateApointiment(appointmentRepository)

    const startsAt = getFutureDate('2025-06-10');
    const endsAt = getFutureDate('2025-06-15');

    await createApointiment.execute({
      customer: 'John',
      startsAt,
      endsAt
    })


    //Create a appointment - Wait the promisse resolves - Promisse result should be a instance of Error
    //Because the dates overlapping
    await expect(createApointiment.execute({
      customer: "Taros",
      startsAt: getFutureDate('2025-06-11'),
      endsAt: getFutureDate('2025-06-16')
    })).rejects.toBeInstanceOf(Error)
  })
})