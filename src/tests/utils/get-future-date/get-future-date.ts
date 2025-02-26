import { setYear, parseISO } from 'date-fns'

/**
 * Receives a Date string and returns the same date 1 year ahead
 * @param date -> 2025-10-08 
 * @returns Date -> 2026-10-08
 */

export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1)
}