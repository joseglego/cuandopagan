import { format as fnsFormat } from "date-fns"
import { es } from "date-fns/locale"

export const DATE_FORMAT = 'dd MMMM'

export const format = (date: any) => fnsFormat(date, DATE_FORMAT, { locale: es })

export const pluralize = (word: string, amount: number): string => `${word}${amount != 1 ? 's' : ''}`
