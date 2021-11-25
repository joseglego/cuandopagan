import {
  addDays,
  differenceInDays,
  isEqual,
  isWeekend,
  lastDayOfMonth,
  subDays
} from "date-fns"

export const getDays = (): { payday: Date, edgeCase: boolean } => {
  const today = new Date();
  const lastDay = lastDayOfMonth(today);

  if (!isWeekend(lastDay)) {
    return { payday: addDays(lastDay, 1), edgeCase: false };
  }

  const prevThanLast = subDays(lastDay, 1);
  if (!isWeekend(prevThanLast)) {
    return { payday: lastDay, edgeCase: false };
  }

  return { payday: prevThanLast, edgeCase: false };
}
