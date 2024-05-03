import moment from 'moment';

export const formatDate = (date: string) => {
  return moment(date).fromNow();
};

export const formatDate2 = (date: string) => {
  return moment(date).format('MMM DD, YYYY');
};
