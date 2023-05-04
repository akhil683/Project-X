
// const travelling = document.querySelector("#Travelling");
// const travel = document.querySelector("#travel");

// const hide = () => {
//     travel.classList.toggle("flex");
//     travel.classList.toggle("hidden");
// }
// travelling.addEventListener('click', hide)

let travel = document.querySelector(".travel");
let tips = document.querySelector(".tips");
let tech = document.querySelector(".tech");

let travelling = document.querySelector("#Travelling");
let tipstricks = document.querySelector("#Tipstricks");
let technology = document.querySelector("#Technology");

travelling.addEventListener('click', () => {
    tech.classList.toggle('flex');
    tech.classList.toggle('hidden');
    tips.classList.toggle('hidden');
    tips.classList.toggle('flex');
} );

tipstricks.addEventListener('click', () => {
        tech.classList.toggle('flex');
        travel.classList.toggle('flex');
        travel.classList.toggle('hidden');
        tech.classList.toggle('hidden');
    });

technology.toggleEventListener('click', () => {
        travel.classList.toogle('flex')
        travel.classList.toggle('hidden');
        tips.classList.toggle('flex');
        tips.classList.toggle('hidden');
    });
