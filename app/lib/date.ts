import moment from 'moment';

export function formatDate(date: string) {
  return moment(date).fromNow();
}

export function formatDate2(date: string) {
  return moment(date).format('MMM DD, YYYY');
}

export function getDiffHours(date: string) {
  return moment().diff(moment(date), 'hours');
}
