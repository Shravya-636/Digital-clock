function showTime(){
    var date=new Date();
    var hr=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var session="AM";
    if(hr==0){
        hr=12;  //12hr format
    }
    if(hr>12){
        hr=hr-12;    //12hr format
        session="PM";
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+min;
    }
    
    document.getElementById("DigitalClock").innerHTML=hr+" : "+min+" : "+sec+" "+session;
    setTimeout(showTime,1000);
    }
    showTime();