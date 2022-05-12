const HOURS = 1000 * 60 * 60;
const MINUTES = 1000 * 60;

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const todaysDate = new Date();
const timeToAdd = 9 * 24 * HOURS;
// 9 days from current date
const timerEndDate = new Date(todaysDate.getTime() + timeToAdd);

const updateTimer = () => {
  const currentTime = new Date().getTime();
  const difference = timerEndDate.getTime() - currentTime;

  const remainingDays = Math.floor(difference / (HOURS * 24));
  const remainingHours = Math.floor((difference % (HOURS * 24)) / HOURS);
  const remainingMinutes = Math.floor((difference % HOURS) / MINUTES);
  const remainingSeconds = Math.floor((difference % MINUTES) / 1000);

  const formattedDays =
    remainingDays < 10 ? `0${remainingDays}` : `${remainingDays}`;
  const formattedHours =
    remainingHours < 10 ? `0${remainingHours}` : `${remainingHours}`;
  const formattedMinutes =
    remainingMinutes < 10 ? `0${remainingMinutes}` : `${remainingMinutes}`;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  daysElement!.innerText = formattedDays;
  hoursElement!.innerText = formattedHours;
  minutesElement!.innerText = formattedMinutes;
  secondsElement!.innerText = formattedSeconds;
};

updateTimer();
setInterval(updateTimer, 1000);
