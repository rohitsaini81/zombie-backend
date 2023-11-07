import axios from 'axios';

let nowTime = new Date();

// Clock function with 12-hour format
const clock = (hour, minutes, seconds, AMPM) => {
  const date = new Date();
  date.setHours(hour + (AMPM === 'PM' && hour !== 12 ? 12 : 0));
  date.setMinutes(minutes);
  date.setSeconds(seconds);

  setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hour++;
      minutes = 0;
    }
    if (hour === 12 && minutes === 0 && seconds === 0) {
      AMPM = AMPM === 'AM' ? 'PM' : 'AM';
    }
    if (hour === 13) {
      hour = 1;
    }
    date.setHours(hour + (AMPM === 'PM' && hour !== 12 ? 12 : 0));
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    nowTime = date.toLocaleTimeString();
  }, 1000);
};

const timeapi = () => {
  axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata')
    .then((response) => {
      const { hour, minute, seconds } = response.data;
      clock(hour, minute, seconds, "AM");
      console.log("Time updated");
    })
    .catch((error) => {
      console.error("Failed to fetch time:", error);
    });
};

export { timeapi, nowTime };