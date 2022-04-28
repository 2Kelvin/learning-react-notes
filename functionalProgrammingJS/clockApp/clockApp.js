// clock app; the functional programming way
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);
// takes a date object and returns an object for clock time that contains hours, minutes, and seconds
const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});
// Takes the clock time object and returns an object where hours are converted to civilian time eg) 1300 becomes 1:00
const civilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});
// takes the clock time object and appends time of day (AM or PM) to the object
const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
});
// takes a function and returns a function that will send a time to the target
// the target will be console.log
const display = target => time => target(time);
// takes a template string “hh:mm:ss tt” and replaces the placeholders with hours, minutes, seconds and time of day
const formatClock = format => time =>
    format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);
// takes in a key to a specific field and adds a zero to the value if it's less than 10
// i.e hours, minutes and seconds; all should be in double digits
const prependZero = key => clockTime => ({
    ...clockTime,
    key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});
// takes clock time & transforms it into civilian time
const convertToCivilianTime = clockTime =>
    compose(appendAMPM, civilianHours)(clockTime);
// compose function
const compose = (...fns) => arg =>
fns.reduce((composed, f) => f(composed), arg);
// takes civilian clock time and makes sure the hours, minutes, and seconds display double digits by prepending/adding zeros where needed
const doubleDigits = civilianTime =>
compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
    )(civilianTime);
// Starts the clock by setting an interval that invokes a callback every second.
// The callback is composed using all our functions.
// Every second the console is cleared, currentTime is obtained, converted, civilianized, formatted, and displayed
const startTicking = () =>
setInterval(
    compose(
        clear,
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits,
        formatClock("hh:mm:ss tt"),
        display(log)
    ),
    oneSecond()
);
// starting the clock
startTicking();