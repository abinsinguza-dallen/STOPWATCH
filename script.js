//define vars to hold time values
let seconds=0;
let minutes=0;
let hours=0;
//define the display values
let displayseconds=0;
let displayminutes =0;
let displayhours =0;

//define var to hold setiterval
let interval =null;
// define var to determine stopwatch status
let status ="stopped";


//stopwatch function(logic to determine when to increant values,etc)
function stopwatch(){
    seconds++;

    //logic to dertime when to increament next value
    if (seconds / 60 ==1){
        seconds =0;
        minutes++;
        if(minutes /60 ==1){
            minutes =0;
            hours++;

        }
    }
    //if seconds/minutes/hours are only one digit add 0 to the value
    if(seconds <10){
        displayseconds="0"+seconds.toString();

    }
    else {
        displayseconds =seconds; 
    }
    if(minutes <10){
        displayminutes ="0"+minutes.toString();

    }
    else{
        displayminutes =minutes;
    }
    if(hours <10){
        displayhours ="0"+hours.toString();
    }
    else{
        displayhours=hours;
    }
    //diplay updated values to user
    document.getElementById("display").innerHTML =displayhours + ":" + displayminutes + ":" + displayseconds;
} 


function startStop(){
    if(status =="stopped"){

        //start he stopwath by calling setinterval
        interval=window.setInterval(stopwatch, 1000);
        document.getElementById("startStop").innerHTML="stop";
        status="started";

    }
    else{
        window.clearInterval(interval)
        document.getElementById("stopStart").innerHTML="start";
        status ="stopped";
    }

}
//function to reset the time
function reset(){
    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00.00.00";
    document.getElementById("startStop").innerHTML="start";
}