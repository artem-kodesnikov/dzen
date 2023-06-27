import { months } from '../values/month';

export const formatDate = (date: string) => {
  const formatedDate = date.split(' ')[0];
  const day = formatedDate.split('-')[2];
  const month = formatedDate.split('-')[1];
  const year = formatedDate.split('-')[0];

  return `${day}/${month}/${year}`;
};

export const formatDayDate = (date: string) => {
  const formatedDate = date.split(' ')[0];
  const day = formatedDate.split('-')[2];
  const month = months.find((month) => month.id === formatedDate.split('-')[1])?.value.slice(0,3);
  const year = formatedDate.split('-')[0];



  return `${day}/${month}/${year}`;
};

console.log(formatDayDate('2017-06-29 12:09:33'));