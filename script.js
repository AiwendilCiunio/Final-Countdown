

setInterval(compareDates, 1000);

function compareDates() {
    const currentDate = new Date();
    const finalDate = new Date(2024, 9, 25, 0, 14, 59, 999);
    let difference = finalDate.getTime() - currentDate.getTime();

    //days
    let daysLeft = Math.floor(difference / 86400000);
    //hours
      let hoursLeft;
      let currentHours = currentDate.getHours();
      let finalHours = finalDate.getHours();
      if (finalHours >= currentHours) {
          hoursLeft = finalHours - currentHours;
      } else {
          hoursLeft = finalHours + 24 - currentHours;
          //daysLeft --;
      }
    //minutes
    let minutesLeft;
    let currentMinutes = currentDate.getMinutes();
    let finalMinutes = finalDate.getMinutes();
    if (finalMinutes >= currentMinutes) {
        minutesLeft = finalMinutes - currentMinutes;
    } else {
        minutesLeft = finalMinutes - currentMinutes + 60;
        //hoursLeft --;
    }
    //seconds
    let secondsLeft;
    let currentSeconds = currentDate.getSeconds();
    let finalSeconds = finalDate.getSeconds();
    if (finalSeconds >= currentSeconds) {
        secondsLeft = finalSeconds - currentSeconds;
    } else {
        secondsLeft = finalSeconds - currentSeconds + 60;
        //minutesLeft --;
    }
   
  
    
    //show clock
    document.getElementById("clock").innerHTML = "Left to New Year: " + daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, " + secondsLeft + " seconds.";
}