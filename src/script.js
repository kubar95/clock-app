import {secondsGenerator, minutesGenerator, hoursGenerator } from './generators'
import addTextToHtmlTag from './addTextToHtmlTag';
export default function () {
  const now = new Date();
  let startingSeconds = now.getSeconds();
  let startingMinutes = now.getMinutes();
  let startingHours = now.getHours();
  if(startingHours>12)
  startingHours=startingHours-12;
  addTextToHtmlTag("clock__hours", startingHours)
  addTextToHtmlTag("clock__minutes", startingMinutes)
  addTextToHtmlTag("clock__seconds", startingSeconds)
  const hours = hoursGenerator(startingHours, 12)
  const minutes = minutesGenerator(startingMinutes, 60, hours);
  const seconds = secondsGenerator(startingSeconds, 60, minutes);
  setInterval(() => { addTextToHtmlTag("clock__seconds", seconds.next().value) }, 1000);

};



