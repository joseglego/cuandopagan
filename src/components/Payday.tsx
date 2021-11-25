import {
  addDays,
  differenceInDays,
  isEqual,
  isWeekend,
  lastDayOfMonth,
  subDays
} from "date-fns"

import { format, pluralize } from '../utils/config'
import { getDays } from '../utils/payday'

const formatedMessage = (day: Date, edgeCase: boolean, isToday: boolean): string => {
  const edgeCaseText = !edgeCase ? " no " : " "
  const dateText = format(day)

  if (isToday) {
    const today = new Date()
    const instancedBegin = today.getHours() >= 14 ? 'empezó' : 'empieza'
    return `Estimados: el depósito de su sueldo lo van a tener a más tardar mañana antes a las 08:00`
  }

  return `Estimados: como es habitual les informo que este mes${edgeCaseText}estamos frente a un caso de borde de depósito bancario por lo que tendrán sus depósitos normalmente el ${dateText} antes de las 08:00 AM`
}

function Payday () {
  const today = new Date()
  const { payday, edgeCase } = getDays()
  const diffInDays = differenceInDays(payday, today)

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '4em'}}><span role="img" aria-label="sheep">💰</span></div>
      <h1>¿Cuándo pagan?</h1>
      <h2>Hoy es: {format(new Date())}</h2>
      {!diffInDays ? (
        <>
          <h2>Hoy Pagan</h2>
          {formatedMessage(payday, edgeCase, !diffInDays)}
        </>
      ): (
        <>
          <h2>El próximo pago será en {differenceInDays(payday, today)} {pluralize('día', diffInDays)}.</h2>
          {formatedMessage(payday, edgeCase, !diffInDays)}
        </>
      )}
    </div>
  )

}

export default Payday
