function formatMinutes(minutes) {
  const timeArr = [];
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = `${minutes % 60}`;
  if (hours > 0) {
    timeArr.push(`${hours}h`);
  }
  if (remainingMinutes > 0) {
    timeArr.push(`${remainingMinutes.padStart(2, '0')}min`);
  }
  return timeArr.length > 0 ? timeArr.join(' ') : '0min';
}

export {formatMinutes};
