function displayTime(){
    var dateTime= new Date();
    var hrs = dateTime.getHours();
    var min =dateTime.getMinutes();
    var sec =dateTime.getSeconds();
    var session =document.getElementById('session');

    if(hrs>=12){
        session.innerHTML='PM';       
    }else{
        session.innerHTML='AM';
    }

    if(hrs>12){
        hrs=hrs -12;
    }
    
Document.getElementById('hours').innerHTML=hrs;
Document.getElementById('minutes').innerHTML=min;
Document.getElementById('seconds').innerHTML=sec;
}
setInterval(displayTime, 10);