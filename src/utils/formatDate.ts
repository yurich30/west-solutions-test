import { format, parseISO } from 'date-fns';

export const formatDate = (date: string) =>
  format(parseISO(date), 'LLLL d, yyyy');

// const d = parseISO('2022-04-17T16:37:00Z');
// format(d, 'LLLL d, yyyy');
//
// console.log(d);
