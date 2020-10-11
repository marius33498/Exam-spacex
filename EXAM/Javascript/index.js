



/*
---------------------*/

/*
fetch ("https://api.nasa.gov/planetary/apod?api_key=0VLZUWwVIlibzLWEO6m922bXgpfKTkTYOoGgd0yf")

 .then(function(response){
	return response.json();
})
 .then(function(json){
	showHouses(json)
})

 function showHouses(houseOf){
	 document.querySelector(".container").innerHTML += '<div id="content-wrap">' + '<p>' + houseOf.copyright + houseOf.date + houseOf.explanation + '</p>'+'</div>'
 }
*/

/*mobile nav
---------------*/
   document.querySelector('.icon').addEventListener("click", function(){
    var navigation = document.querySelector("#mobileNavigation");
    if(navigation.style.display === "block"){
        navigation.style.display = "none";
    }
    else {
        navigation.style.display = "block";
    }
})