var servePage = document.getElementById("main-page")
// comment back in
servePage.style.display = "none";

class Name {
    constructor(name) {
        this.name = name
    }
    printName() {
        return this.name
    }
}

class Zip {
    constructor(zipIsh) {
        this.zipIsh = zipIsh
    }
    printZipCode() {
        return this.zipIsh
    }
}


function nameFunc() {
    var userInput = document.getElementById("input-name").value;
    var inputForm = document.getElementById("input-form");
    var mainHeader = document.getElementById("main-header")


    var userName = new Name(userInput)
    var printPage = document.getElementById("name")
    printPage.textContent = "Hello " + userName.printName() + "!";
    mainHeader.style.display = "none";
    inputForm.style.display = "none";


    var zipInput = document.getElementById("input-zip").value
    var userZip = new Zip(zipInput);
    var printZipPage = document.getElementById("zip")
    printZipPage.textContent = "Zip Code: " + userZip.printZipCode()

    
    


    mainPage()
}




async function mainPage() {
    servePage.style.display = "block";
}

function optionsButton() {
    var options = document.getElementById("selectedOption");
    var selectedOption  = options.options[options.selectedIndex].value;
    // console.log(selectedOption)

    if(selectedOption != null) {
        // console.log("options has been picked")

        var queryOption = selectedOption
        console.log("button clicked: " + queryOption);
        var apiKey = ""

        // Need to get activities with images to display on the screen when searched for them!

        var queryURL = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=017576662512468239146:omuauf_lfve&q=" + queryOption;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // console.log(response)

            var result = response.items
            console.log(result)
        })
    }
}

















// Google API
// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
    //   var map, infoWindow;
    //   function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 6
    //     });
    //     infoWindow = new google.maps.InfoWindow;

    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function(position) {
    //         var pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };

    //         infoWindow.setPosition(pos);
    //         infoWindow.setContent('Location found.');
    //         infoWindow.open(map);
    //         map.setCenter(pos);
    //       }, function() {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //       });
    //     } else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, infoWindow, map.getCenter());
    //     }
    //   }

    //   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent(browserHasGeolocation ?
    //                           'Error: The Geolocation service failed.' :
    //                           'Error: Your browser doesn\'t support geolocation.');
    //     infoWindow.open(map);
//}









