import { expect, test } from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../../tests/utils/get-future-date/get-future-date';

test('Create an appointment', () => {
  const startsAt = getFutureDate('2025-10-08')
  const endsAt = getFutureDate('2025-10-09')


  //Instancing the class
  const appointment = new Appointment({
    customer: "José Riberio",
    startsAt,
    endsAt
  });


  //What we expect as a result: new appointment created with customer field = "José Riberio"
  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual("José Riberio");

});


test('Cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2025-08-10')
  const endsAt = getFutureDate('2025-08-09')

  ////What we expect as a result: error by endsAt < startsAt
  expect(() => {
    return new Appointment({
      customer: "José Riberio",
      startsAt,
      endsAt
    });
  }).toThrow();

})


test('Cannot create an appointment with start date before now', () => {
  const startsAt = new Date()
  const endsAt = getFutureDate('2020-10-09')


  ////What we expect as a result: error by startsDate < now
  expect(() => {
    return new Appointment({
      customer: "José Riberio",
      startsAt,
      endsAt
    });
  }).toThrow();

})