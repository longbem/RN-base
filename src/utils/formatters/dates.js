import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'trong %s',
    past: '%s',
    s: 'Vừa xong',
    ss: '%d giây trước',
    m: '1 phút trước',
    mm: '%d phút trước',
    h: 'một tiếng trước',
    hh: '%d tiếng trước',
    d: 'một ngày trước',
    dd: '%d ngày trước',
    w: 'một tuần trước',
    ww: '%d tuần trước',
    M: 'một tháng trước',
    MM: '%d tháng trước',
    y: 'một năm trước',
    yy: '%d năm trước',
  },
});

export const getDateDetailBySortTime = (sortTime) => {
  const hourAndMinute = sortTime.split(' ')[0];
  const a = sortTime.split(' ')[1];
  const minute = hourAndMinute.split(':')[1];
  const hour = hourAndMinute.split(':')[0];
  const date = dayjs(new Date()).format('DD/MM/YYYY');

  const time = dayjs(
    `${date} ${hour.length === 1 ? `0${hour}` : `${hour}`}:${minute} ${a}`,
    'DD/MM/YYYY hh:mm a',
  ).unix();
  return time;
};

export const toHumanRead = (date) => {
  return dayjs(date ?? Date.now()).fromNow();
};
