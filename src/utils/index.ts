import data from "@/data/data.json";
import type { TypeNotes } from '@/types';

const getInitialData = (): TypeNotes => (data)

const showFormattedDate = (date: string | Date): string => { // Added type annotations
  const options: Intl.DateTimeFormatOptions = { // Specified type for options
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate };
