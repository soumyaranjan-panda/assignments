const d = new Date;
let sec = d.getSeconds();
let minute = d.getMinutes();
let hours = d.getHours();

const increment = () => {
    if(sec < 60){
        sec++;
    }else{
        minute++;
        sec = 0;
    }
    if(minute >= 60){
        hours++;
        minute = 0;
    }
    
}
const stringify = (x)=>{
    if(x < 10){
        x = "0"+x.toString();
    }else{
        x = x.toString();
    }
    return x;
}
const stringMaker = (sec, minute, hours)=>{
    let secString = stringify(sec);
    let minString = stringify(minute);
    let hourString = stringify(hours)
    console.log(`${hourString}:${minString}:${secString}`);
}
setInterval(() => {
    increment();
    stringMaker(sec, minute, hours);
}, 1000);
