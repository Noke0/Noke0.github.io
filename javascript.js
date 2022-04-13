const advice_api_url = "https://api.adviceslip.com/advice";

async function getAPI(){
    const response = await fetch(advice_api_url);
    let data = await response.json();
    return data;
}

function getAdvice(){
    Promise.resolve(getAPI()).then(function(data){
        let adviceNumber = document.getElementById("adviceNumber");
        let adviceText = document.getElementById("advice");
    
        adviceNumber.innerHTML = "ADVICE # "+data.slip.id;
        adviceText.innerHTML = "\""+data.slip.advice+"\""
    });
}

getAdvice();

document.addEventListener("DOMContentLoaded", (event)=>{
    let rollDice = document.getElementById("rollDice");

    rollDice.addEventListener("click", function(){
        getAdvice();
    });
});