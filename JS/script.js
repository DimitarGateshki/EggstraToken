document.addEventListener('DOMContentLoaded', function() {
    var services = document.querySelectorAll('.service');
    var contents = document.querySelectorAll('.accordion');
    
    services.forEach(function(service, index) {
        service.addEventListener('click', function() {
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            services.forEach(function(srv) {
                srv.classList.remove('active');
            });

            service.classList.add('active');


            if (contents[index]) {
                contents[index].classList.add('active');
            }

            contents[index].querySelector('.service-title').style.setProperty("--index-content", '"0' + (index + 1) + '"');

            

        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var cover = document.querySelectorAll('.cover');
    var open = document.querySelectorAll('.open');
    var close = document.querySelectorAll('.close');
    var links = document.querySelectorAll('a');

    open[0].addEventListener('click', function(){
        cover[0].classList.add('active-menu');
    });

    close[0].addEventListener('click', function(){
        cover[0].classList.remove('active-menu');
    }
    )

    links.forEach(function(link){
        link.addEventListener('click', function() {
            cover[0].classList.remove('active-menu');

        })


    })



})


document.addEventListener('DOMContentLoaded', function() {

// Set the date we're counting down to
    var countDownDate = new Date("Dec 11, 2024 01:56:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    if (distance <= 0) {
        document.getElementById("demo").innerHTML = "Eggstra is launched ," + "<span>" + " BUY NOW !!!"+ "</span>";
        clearInterval(x); 
    }else{

        console.log('wtf')
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = "Get ready for the official EGGstra launch! Release in: <span>" + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s " + "</span>";

        var buyBTN = document.getElementById("buy");
        document.getElementById("buyBTN").classList.add("disabled")
        buyBTN.classList.add("disabled");
        buyBTN.innerHTML = 'Coming soon';

        // If the count down is finished, write some text
        if (distance < 0) {
            document.getElementById("demo").innerHTML = "Eggstra is launched ," + "<span>" + " BUY NOW !!!"+ "</span>";
            document.getElementById("buyBTN").classList.remove("disabled")
            buyBTN.classList.remove("disabled");
            buyBTN.innerHTML = 'GET EGGSTRA';
            clearInterval(x);

        }
    }
    }, 100);
    
});

