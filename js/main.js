const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let counter = 1;

const imgContainer = document.querySelector(".img-container");
const up = document.getElementById("up");
const down = document.getElementById("down");

let imgGenerator

for (let i = 0; i < images.length; i++) {
    cardGenerator = document.createElement("div");
    cardGenerator.classList.add("position-absolute","show","position-relative")
    imgContainer.append(cardGenerator);

    if(i==0){
        cardGenerator.classList.add("visible");
    }

    //image generation
    imgGenerator = document.createElement("img");
    imgGenerator.src= images[i].image;
    cardGenerator.append(imgGenerator);

    //title generation
    h2Generator = document.createElement("h2");
    h2Generator.classList.add("position-absolute","text-white");
    h2Generator.innerHTML= images[i].title;
    cardGenerator.append(h2Generator);

    //text generation
    textGenerator = document.createElement("p");
    textGenerator.classList.add("position-absolute","text-white");
    textGenerator.innerHTML= images[i].text;
    cardGenerator.append(textGenerator);
}

down.addEventListener("click", function () {
    let imgOldSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgOldSelector.classList.remove("visible");

    let imgOldAside = document.querySelector(`.img-aside-container:nth-child(${counter})`);
    imgOldAside.classList.remove("activate");

    if (counter==images.length){
        counter=0;
    }

    counter++;
    console.log(counter);

    let imgVisibleSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgVisibleSelector.classList.add("visible");

    let imgVisibleAside = document.querySelector(`.img-aside-container:nth-child(${counter})`);
    imgVisibleAside.classList.add("activate");

})

up.addEventListener("click", function () {
    let imgOldSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgOldSelector.classList.remove("visible");

    let imgOldAside = document.querySelector(`.img-aside-container:nth-child(${counter})`);
    imgOldAside.classList.remove("activate");
    
    if (counter==1){
        counter=images.length+1;
    }
    console.log(counter-1);
    counter--;

    let imgVisibleSelector = document.querySelector(`.show:nth-child(${counter})`);
    imgVisibleSelector.classList.add("visible");

    let imgVisibleAside = document.querySelector(`.img-aside-container:nth-child(${counter})`);
    imgVisibleAside.classList.add("activate");
})