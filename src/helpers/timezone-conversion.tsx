const currentTime = (dt: number, timezone: number) => {
  const localDate = new Date(dt * 1000 + timezone * 1000);

  // Convert to 24 hour time
  const hours = localDate.getHours();
  const newHours = addZeroBefore(hours);
  const mins = localDate.getMinutes();
  const newMins = addZeroBefore(mins);
  const secs = localDate.getSeconds();

  const localTime = `${newHours}:${newMins}:${secs}`;

  return localTime;
};

const addZeroBefore = (time: number) => {
  return (time < 10 ? "0" : "") + time;
};

export default currentTime;
