
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function toHHMMSS(time: string) {
  // Get total seconds
  let numberInSeconds = parseInt(time, 10);
  // Get hours
  let hours: any = Math.floor(numberInSeconds / 3600);
  // Get remaining minutes
  let minutes: any = Math.floor((numberInSeconds - (hours * 3600)) / 60);
  // Get remaining seconds
  let seconds: any = numberInSeconds - (hours * 3600) - (minutes * 60);
  // Add leading 0 to hours
  if (hours < 10) {
    hours = '0' + hours;
  }
  // Add leading 0 to minutes
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  // Add leading 0 to seconds
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  // Return combined text string
  return (hours !== '00' ? hours + ':' : '') + minutes + ':' + seconds;
}
