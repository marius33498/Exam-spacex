

/*mobile icon
---------------*/
   document.querySelector('.icon').addEventListener("click", function(){
    var navigation = document.querySelector('#mobileNavigation');
    if(navigation.style.display === "block"){
        navigation.style.display = "none";
    }
    else {
        navigation.style.display = "block";
    }
})
 

/*Launches from spacex
-------------------------*/

fetch("https://api.spacexdata.com/v3/launches/upcoming")
  .then(function(response){
	return response.json();
})
  .then(function(json){
	 showSpace(json)
})
      function showSpace(spacexLaunch){ 

         for (let i = 0; i <spacexLaunch.length; i++){
			 	 
			 if (!spacexLaunch[i].details){
				 continue;
		   }
		 
		 document.querySelector(".container").innerHTML += '<div class="content-wrap">'  + '<div id="details">'+ '<h3>' + spacexLaunch[i].flight_number + spacexLaunch[i].mission_name + '</h3>'+moment(spacexLaunch[i].launch_date_local).format('MMM Do YYYY') +'<p>'+ spacexLaunch[i].details + '</p>'+ '</div>' + '</div>' 
		}
  }
/*button click for text
-------------------------*/
document.getElementById("button").onclick = function () {
		var click = document.getElementById("moreInfoContent");
	   
	if(click.style.display === "none"){
		click.style.display = "block";
	}else{
		click.style.display ="none";
	
	}
}
