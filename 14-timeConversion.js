/**
 * 
 * 
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0
19:05:45
 */

function timeConversion(s) {
  // Write your code here
  s = s.toLowerCase();
  const timeBase = s.split(":");
  let time = "00:00:00";

  if (s.includes("pm")) {
    const sec = timeBase[2].split("pm");
    if (parseInt(timeBase[0]) + 12 > 23) {
      time = `${timeBase[0]}:${timeBase[1]}:${sec[0]}`;
    } else {
      time = `${12 + parseInt(timeBase[0])}:${timeBase[1]}:${sec[0]}`;
    }
  }

  if (s.includes("am")) {
    const sec = timeBase[2].split("am");
    if (parseInt(timeBase[0]) > 11) {
      time = `00:${timeBase[1]}:${sec[0]}`;
    } else {
      time = `${timeBase[0]}:${timeBase[1]}:${sec[0]}`;
    }
  }

  return time;
}

console.log("am", timeConversion("12:40:22AM"));
