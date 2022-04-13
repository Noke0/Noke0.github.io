let size = "650";
let desktopLocation = "./images/pattern-divider-desktop.svg";
let phoneLocation = "./images/pattern-divider-mobile.svg"

document.addEventListener("DOMContentLoaded", (event)=>{
    givePhonePic();
})

window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: "+size+"px)").matches) { // The screen is phone sized
        if (document.getElementById("imageIMG").src != phoneLocation){
            document.getElementById("imageIMG").src = phoneLocation;
        }
    }else{
        if (document.getElementById("imageIMG").src != desktopLocation){
            document.getElementById("imageIMG").src = desktopLocation;
        }
    }
})

function givePhonePic(){
    const mediaQuery = window.matchMedia("(max-width: "+size+"px)")
    if (mediaQuery.matches) {
        let image = document.getElementById("imageIMG");
        image.src = phoneLocation;
    }
}