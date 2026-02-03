//Returns a string with the time in minutes or hours of a timestamp
export const timeAgo = (timestamp: string) => {
  const minutes = Math.floor(
    (new Date().getTime() - new Date(timestamp).getTime()) / 60000,
  );
  //Time < 60 minutes
  const isOneMinute = minutes === 1 ? true : false;
  if (minutes < 60) {
    return `${minutes} ${isOneMinute ? "minute" : "minutes"}`;
  }
  //Time > 60 minutes
  const hours = Math.floor(minutes / 60);
  const isOneHour = hours === 1 ? true : false;
  return `${hours} ${isOneHour ? "hour" : "hours"}`;
};
