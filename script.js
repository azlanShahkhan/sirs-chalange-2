let is24Hour = false;

function updateClock(){
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";

    if(!is24Hour){
        h = h % 12;
        h = h ? h : 12;
    }

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    document.getElementById("time").innerText = `${h}:${m}:${s}`;
    document.getElementById("ampm").innerText = is24Hour ? "" : ampm;

    // Date
    document.getElementById("date").innerText =
        now.toDateString();

    // Seconds circle animation
    const offset = 440 - (s/60)*440;
    document.getElementById("secCircle").style.strokeDashoffset = offset;
}

function toggleMode(){
    document.body.classList.toggle("light");
}

function toggleFormat(){
    is24Hour = !is24Hour;
}

setInterval(updateClock,1000);
updateClock();