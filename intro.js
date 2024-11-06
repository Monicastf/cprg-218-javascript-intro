secret.addEventListener("click", function(){
    alert("lalala");
});
//function=a container, it contains things, semi-colon means its done with that command

//when the user presses the "lights_on" button I want to replace the image in "lightbulb" with the version that shows lights on
lights_on.addEventListener("click", function(){
    console.log("Lights turned on");
    document.getElementById("lightbulb").src = "lightbulb_on.webp";
    //document. tells it to look for a specific id, and you want to change the src
    document.getElementById("lights_on").style.display="none";
    document.getElementById("lights_off").style.display="initial";
    //Apply the "light" class to the body of the page
    document.body.classList.toggle("light");
    //find document, then body, then classlist and then toggle on or off
});

lights_off.addEventListener("click", function(){
    console.log("Lights turned off");
    document.getElementById("lightbulb").src = "lightbulb_off.webp";
    document.getElementById("lights_on").style.display="initial";
    document.getElementById("lights_off").style.display="none";
    document.body.classList.toggle("light");
    //makes it toggle if the class is on/off
});