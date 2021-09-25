var countDownDate = new Date("jan 20, 2022 12:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    //it will return todays date and time

    //now to find distance of target date and todays date we will subctract 

    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("root").innerHTML = "Your next Birthday having" + "<br>" + days + "days " + hours + "h " + minutes + "m " + seconds + "s " ;

    if (distance < 0) {
         clearInterval(x);
         document.getElementById("root").innerHTML = "Time Expired";
    }



},1000);
