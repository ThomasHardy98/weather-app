const currentTime = (dt: number, timezone: number) => {
  const localDate = new Date(dt * 1000 + timezone * 1000);

  // Convert to 24 hour time
  const hours = localDate.getHours();
  const mins = localDate.getMinutes();
  const secs = localDate.getSeconds();

  const localTime = `${hours}:${mins}:${secs}`;

  return localTime;
};

export default currentTime;
