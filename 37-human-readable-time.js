/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  seconds = Math.max(0, Math.min(359999, seconds));

  if (seconds === 0) return "00:00:00";

  if (seconds <= 59) return `00:00:${seconds}`;

  let hrs = Math.floor(seconds / 3600),
    mins = Math.floor((seconds % 3600) / 60),
    sec = seconds % 60;

  return `${hrs.toString().padStart(2, "0")}:${mins
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}
