var numberofdrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttoninnerHTML = this.innerHTML; 
        
        makesound(buttoninnerHTML);

        buttonanimation(buttoninnerHTML);
       
    });
}

document.addEventListener("keypress", function(event){

    makesound(event.key);

    buttonanimation(event.key);

 });

function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "i":
            var bass = new Audio("sounds/bass-hit.mp3");
            bass.play();
        break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    
        default:
            alert("Wrong Key Pressed!!!");
            break;
    }
}

function buttonanimation(currentkey){

    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100);

}

