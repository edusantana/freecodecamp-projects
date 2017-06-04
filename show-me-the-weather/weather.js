var celsus = false;
var temperature;

$(document).ready(function() {


 $.getJSON( "https://ipapi.co/json", function( data ) {
   $("#place").html(data['city'] + "/" + data['region'] + " - " + data['country_name']);
 });


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("latitude: " + position.coords.latitude + "<br>\nlongitude: " + position.coords.longitude);

    $.getJSON( "https://crossorigin.me/https://api.darksky.net/forecast/510b9e1db346eca8acb7dd594fa98282/"+position.coords.latitude+","+position.coords.longitude, function( weather ) {
      // Help about this api: https://darksky.net/dev/docs/forecast
      // And: https://darksky.net/dev/docs/response
      temperature = weather['currently']["temperature"];
      console.log("Temperature: " + weather['currently']["temperature"]);
      console.log("icon: " + weather['currently']["icon"]);
      // $("#temp").html(weather['currently']["temperature"]);
      // $("#weather").className = weather['currently']["icon"];
      document.getElementById("weather").className =  weather['currently']["icon"];
    });

    });

  }

});
