var clockComponent;
var formatter;

export function initClock(){
    clockComponent = document.getElementById("clock");
    formatter = new Intl.DateTimeFormat([], {
        timeZone: 'Europe/London',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZoneName: "short",
      });
    
    getTimeString();
    setInterval(getTimeString, 5000);
}

function getTimeString(){
    var formatted = formatter.format(new Date());
    formatted = formatted.replace(" ", "");
    clockComponent.innerHTML = formatted;
}