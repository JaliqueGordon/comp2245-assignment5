document.addEventListener("DOMContentLoaded", function() {
    var lookupButton = document.getElementById("lookup");

    


 

    lookupButton.addEventListener("click", function() {
        var countryInput = document.getElementById("country");
        var country = countryInput.value


        fetch("world.php?country=" + country)
             .then(response => response.text())
             .then(data => {
                document.getElementById("result").innerHTML = data;

             })

             .catch(error => {
                console.error("Error fetching data:", error);

             });
  });

    });