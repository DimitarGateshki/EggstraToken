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
    var countDownDate = new Date("Dec 28, 2024 20:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

  

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
        var buyBTNM = document.getElementById("buym");

        document.getElementById("buyBTN").classList.add("disabled")
        buyBTN.classList.add("disabled");
        buyBTN.innerHTML = 'Coming soon';

        document.getElementById("buyBTNM").classList.add("disabled")
        buyBTNM.classList.add("disabled");
        buyBTNM.innerHTML = 'Coming soon';

        // If the count down is finished, write some text
        if (distance < 0) {
            document.getElementById("demo").innerHTML = "Eggstra is launched ," + "<span>" + " BUY NOW !!!"+ "</span>";
            document.getElementById("buyBTN").classList.remove("disabled")
            buyBTN.classList.remove("disabled");
            buyBTN.innerHTML = 'GET EGGSTRA';

            document.getElementById("buyBTNM").classList.remove("disabled")
            buyBTNM.classList.remove("disabled");
            buyBTNM.innerHTML = 'GET EGGSTRA';
            clearInterval(x);

        }
    
    }, 100);
    
});


//NEW
document.addEventListener('DOMContentLoaded', function() {
    var data = [{
        values: [5500000000,3000000000,1000000000,500000000],
        labels: ['On Launch (Liquidity pool, airdrops, and community incentives)', 'NFT Development & Future Projects', 'Marketing & Promotions', 'Reserve for future needs'],
        type: 'pie',
        textfont: {
            color: '#ffffff', // Color for the text inside the pie
            size: 14,         // Font size for text inside the pie
          },
          outsidetextfont: {
            color: '#ffffff', // Color for the labels outside the pie
            size: 14,         // Font size for the labels outside the pie
          },
          marker: {
            colors: ['#0818a8', '#711dc4', '#34b028', '#832222'], // Slice colors
          },
      }];
      let width = screen.width;

      if(width>900){
        var layout = {
            paper_bgcolor: 'transparent', // Background color of the entire chart
            plot_bgcolor: 'transparent',
            font: {
                color: '#ffffff', // Title color
                size: 10,
            },
        };
       }else{
        var layout = {
            paper_bgcolor: 'transparent', // Background color of the entire chart
            plot_bgcolor: 'transparent',
            showlegend: false,
            font: {
                color: '#ffffff', // Title color
                size: 10,
            },
        };
       }
      
      Plotly.newPlot('tester', data, layout);

      var chartDiv = document.getElementById('tester');
    chartDiv.on('plotly_click', function(eventData) {
      // Get details of the clicked slice
      var clickedLabel = eventData.points[0].label; // Label of the slice
      var clickedValue = eventData.points[0].value; // Value of the slice

      // Display custom content based on the clicked slice
      var infoDiv = document.getElementById('tokenomics-text');
      var infoTitle = document.getElementById('tokenomics-title');


      switch (clickedLabel) {
        case 'On Launch (Liquidity pool, airdrops, and community incentives)':
          infoTitle.innerHTML = `<strong>${clickedLabel}</strong>`
          infoDiv.innerHTML = `This allocation ensures that liquidity is available on decentralized exchanges, allowing smooth token trading. Airdrops will reward early adopters and build momentum, while community incentives will encourage engagement and growth.`;
          break;
        case 'NFT Development & Future Projects':
          infoTitle.innerHTML = `<strong>${clickedLabel}</strong>`
          infoDiv.innerHTML = `Funds allocated for NFT creation and future development will enable the launch of the EGGstra NFT collection. This supports artwork, utility integration, and expansion into future projects like apps, games, metaverses, or exclusive rewards.`;
          break;
        case 'Marketing & Promotions':
          infoTitle.innerHTML = `<strong>${clickedLabel}</strong>`
          infoDiv.innerHTML = `A dedicated budget for marketing campaigns, influencer partnerships, and viral promotions to spread awareness and attract new users. This ensures EGGstra gains visibility across social media, communities, and crypto enthusiasts worldwide.`;
          break;
        case 'Reserve for future needs':
          infoTitle.innerHTML = `<strong>${clickedLabel}</strong>`
          infoDiv.innerHTML = `This reserve ensures long-term sustainability by providing flexibility to fund unexpected opportunities, developments, or emergency needs that arise as the project scales.`;
          break;
        default:
          infoTitle.innerHTML = `<strong> </strong>`
          infoDiv.innerHTML = `Tokenomics refers to the economic design and structure behind a cryptocurrency or token within a blockchain project. It combines "token" and "economics" and defines how the token is issued, distributed, and used within its ecosystem. Ultimately, tokenomics ensures sustainable value, utility, and demand for the token, forming the foundation of a project’s economic stability and long-term success.`;
      }
    });
})
