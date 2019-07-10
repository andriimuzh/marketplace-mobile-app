import { differenceInHours, format } from 'date-fns';

export default function timeDurationSetter(date) {
  const time = differenceInHours(new Date(), date);
  let timeFormat;
  if (time <= 720) {
    timeFormat = 'MMM D HH:mm';
  } else {
    timeFormat = 'MMM. D, YYYY';
  }

  return format(date, timeFormat);
}
