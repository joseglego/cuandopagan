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

function Payday () {
  const today = new Date()
  const { payday, edgeCase } = getDays()
  const diffInDays = differenceInDays(payday, today)
  const dateText = format(payday)

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '4em'}}><span role="img" aria-label="sheep">💰</span></div>
      <h1>¿Cuándo pagan?</h1>
      <h2>Hoy es: {format(new Date())}</h2>
      {!diffInDays ? (
        <>
          <h2>Hoy Pagan</h2>
          <p>Estimados: el depósito de su sueldo lo van a tener a más tardar mañana antes a las 08:00</p>
        </>
      ): (
        <>
          <h2>El próximo pago será en {differenceInDays(payday, today)} {pluralize('día', diffInDays)}.</h2>
          <p>Estimados: como es habitual les informo que este mes {!edgeCase ? <b>no</b> : null} estamos frente a un caso borde de depósito bancario por lo que tendrán sus depósitos normalmente el {dateText} antes de las 08:00 AM</p>
        </>
      )}
    </div>
  )

}

export default Payday
