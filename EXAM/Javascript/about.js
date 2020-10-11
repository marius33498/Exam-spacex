// JavaScript Document

document.getElementById("button").onclick = function () {
		var click = document.querySelector("#moreInfoContent");
	   
	if(click.style.display === "none"){
		click.style.display = "block";
	}else{
		click.style.display ="none";
	
	}
}
/*
/*navigation for mobile
--------------------------*/
   document.querySelector('.icon').addEventListener("click", function(){
    var navigation = document.querySelector("#mobileNavigation");
    if(navigation.style.display === "block"){
        navigation.style.display = "none";
    }
    else {
        navigation.style.display = "block";
    }
})