const { DAYS } = require('./constants.js');

const splitDateInfo = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return {
    day: DAYS[date.getDay()],
    hour: (hour % 12) || 12,
    minutes: minutes ? `:${minutes}` : '',
    period: hour > 11 ? 'PM' : 'AM',
  };
};

const formatOpenTime = (startDate, endDate) => {
  if (!startDate || !endDate) return '';
  const { day, hour, minutes } = splitDateInfo(startDate);
  const openHours = `${day},${hour}${minutes}`;
  const { hour: hourEnd, minutes: minutesEnd, period } = splitDateInfo(endDate);
  return `${openHours}-${hourEnd}${minutesEnd}${period}`;
};

const images = [
  './photo1.jpg',
  './photo2.jpg',
  './photo3.jpg',
  './photo4.jpg',
  './photo5.jpg',
]

module.exports = { formatOpenTime, images } ;
