document.addEventListener("DOMContentLoaded", function() {
    var lookupButton = document.getElementById("lookup");
    var lookupCitiesButton = document.getElementById("lookupCities");

    lookupButton.addEventListener("click", function() {
        fetchData("countries");

    });

    lookupCitiesButton.addEventListener("click", function() {
        fetchData("cities");

    });


    function fetchData(lookupType) {
        var countryInput = document.getElementById("country");
        var country = countryInput.value;

        var url = "world.php?country=" + country + "&lookup=" + lookupType;

        fetch (url)
              .then(response => response.text())
              .then(data =>  {
                  document.getElementById("result").innerHTML = data;

              })
              .catch = (error => {
                console.error("Error fetching data:", error);

              });
        
    }


});




    


 
