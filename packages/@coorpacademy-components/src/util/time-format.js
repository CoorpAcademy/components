function formatMinutes(minutes) {
  let timeString = '';
  const hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;
  if (hours > 0) {
    timeString += `${hours}h `;
  }
  if (remainingMinutes > 0) {
    remainingMinutes = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
    timeString += `${remainingMinutes}min`;
  }
  return timeString;
}

export {formatMinutes};
