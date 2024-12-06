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

