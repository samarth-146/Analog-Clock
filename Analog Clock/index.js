setInterval(() => { 
    let hour=document.getElementById('hour');
    let minute=document.getElementById('minute');
    let second=document.getElementById('second');
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let hour_rotation=30*hours+minutes/2;
    let minute_rotation=6*minutes;
    let second_rotation=6*seconds;
    hour.style.transform=`rotate(${hour_rotation}deg)`;
    minute.style.transform=`rotate(${minute_rotation}deg)`;
    second.style.transform=`rotate(${second_rotation}deg)`;
}, 1000);
