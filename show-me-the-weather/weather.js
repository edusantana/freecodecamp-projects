var celsus = true;
var temperature = {};

function temperatureUpdate(){
  if (celsus){
    $("#temperature").html(temperature.c);
  }else{
    $("#temperature").html(temperature.f);
  }

}

$(document).ready(function() {


 $.getJSON( "https://ipapi.co/json", function( data ) {
   $("#place").html(data['city'] + "/" + data['region'] + " - " + data['country_name']);
 });


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("latitude: " + position.coords.latitude + "<br>\nlongitude: " + position.coords.longitude);

      $.getJSON( "https://crossorigin.me/https://api.darksky.net/forecast/510b9e1db346eca8acb7dd594fa98282/"+position.coords.latitude+","+position.coords.longitude +"?units=si", function( weather ) {
        // Help about this api: https://darksky.net/dev/docs/forecast
        // And: https://darksky.net/dev/docs/response
        temperature.c = weather['currently']["temperature"];
        // T(°F) = T(°C) × 9/5 + 32
        temperature.f = temperature.c*1.8 + 32;
        console.log("Temperature: " + temperature.c);
        console.log("Temperature: " + temperature.f);
        console.log("icon: " + weather['currently']["icon"]);
        temperatureUpdate();

        // $("#weather").className = weather['currently']["icon"];
        document.getElementById("weather").className =  weather['currently']["icon"];
      });

    });

  }

});
