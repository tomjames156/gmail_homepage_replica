const features = document.querySelectorAll("div.feature");
const questions = document.querySelectorAll("div.question");
const answers = document.querySelectorAll("div.answer");
const languagesContainer = document.getElementById("languages");

let languages = [
    'Chinese', 'English', 'Spanish', 'Arabic', 'French', 'Persian', 'German', 
    'Russian', 'Malay', 'Portuguese', 'Italian', 'Turkish', 'Lahnda', 'Tamil', 'Urdu', 'Korean', 
    'Hindi', 'Bengali', 'Japanese', 'Vietnamese', 'Telugu', 'Marathi'
];

features[0].children[0].style.color = "#06f"
features[4].children[0].style.color = "#06f"

for(let i = 0; i < 4; i++){
    features[i].addEventListener("click", () => {
        resetFeatures(0, 3);
        features[i].children[0].style.color = "#06f"
        features[i].parentElement.children[0].style.background = "#06f";
    })
}

for(let i = 4; i < 7; i++){
    features[i].addEventListener("click", () => {
        resetFeatures(4,7);
        features[i].children[0].style.color = "#06f"
        features[i].parentElement.children[0].style.background = "#06f";
    })
}

function resetFeatures(start, stop){
    for(let i = start; i < stop; i++){
        features[i].children[0].style.color = "#606060"
        features[i].parentElement.children[0].style.background = "#eef0f1";
    }
}

function answerFunction(receiver){
    if(receiver.children[0].children[1].classList == "fa-solid fa-angle-down"){
        receiver.children[0].children[1].classList = "fa-solid fa-angle-up";
    }else{
        receiver.children[0].children[1].classList = "fa-solid fa-angle-down";
    }
    receiver.children[1].classList.toggle("hide");
}

for(i = 0; i < languages.length; i++){
    languagesContainer.innerHTML += `<option value=${languages[i]}>${languages[i]}</option>`; 
}