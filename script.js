function nowTime(){
    const date = new Date()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    var amOrPm = "AM";

    if(hour >= 12){
        amOrPm = "PM"
    }

    if(hour > 12){
        hour -= 12
    }


    if(second < 10){
        second = "0" + second;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    document.getElementById('time').innerHTML = `${hour} : ${minute} : ${second} ${amOrPm}`
    // document.getElementById('amorpm').innerHTML = amOrPm
}

setInterval(nowTime, 1000)