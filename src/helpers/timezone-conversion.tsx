const currentTime = (dt: number, timezone: number) => {
  // Convert time to real date
  const localDate = new Date(dt * 1000 + timezone * 1000);

  // Convert to 24 hour time
  const hours = localDate.getHours();
  const newHours = addZeroBefore(hours);
  const mins = localDate.getMinutes();
  const newMins = addZeroBefore(mins);
  const secs = localDate.getSeconds();

  // Create a dynamic string
  const localTime = `${newHours}:${newMins}:${secs}`;

  // Return string
  return localTime;
};

const addZeroBefore = (time: number) => {
  // Add additional 0 in front of numbers smaller than 10
  return (time < 10 ? "0" : "") + time;
};

export default currentTime;
