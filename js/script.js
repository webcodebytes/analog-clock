// Degrees for each unit of time (6 degrees per second)
const DEG_PER_SECOND = 6;

// Selecting hour, minute, and second hand elements
const hourHand = document.querySelector("#hr");
const minuteHand = document.querySelector("#mn");
const secondHand = document.querySelector("#sc");

// Function to update clock hands based on current time
function updateClock() {
  // Getting the current date and time
  const currentTime = new Date();

  // Calculating rotation angles for hour, minute, and second hands
  const hourRotation =
    currentTime.getHours() * 30 +
    currentTime.getMinutes() * (DEG_PER_SECOND / 12);
  const minuteRotation = currentTime.getMinutes() * DEG_PER_SECOND;
  const secondRotation = currentTime.getSeconds() * DEG_PER_SECOND;

  // Applying the rotation transformations to the clock hands
  hourHand.style.transform = `rotateZ(${hourRotation}deg)`;
  minuteHand.style.transform = `rotateZ(${minuteRotation}deg)`;
  secondHand.style.transform = `rotateZ(${secondRotation}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
