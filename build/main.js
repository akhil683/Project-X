
let travel = document.querySelectorAll(".travel");
let tips = document.querySelectorAll(".tips");
let tech = document.querySelectorAll(".tech");

let travelling = document.querySelector("#Travelling");
let tipstricks = document.querySelector("#Tipstricks");
let technology = document.querySelector("#Technology");
let all = document.querySelector("#all");

all.addEventListener('click', () => {
    tech.forEach((tech) => {
        tech.classList.remove('hidden');
        tech.classList.add('flex');
    })
   tips.forEach((tips) => {
        tips.classList.add('flex');
        tips.classList.remove('hidden');
   })
   travel.forEach((travel) => {
        travel.classList.remove('hidden');
        travel.classList.add('flex');
   })
})

travelling.addEventListener('click', () => {
    tech.forEach((tech) => {
        tech.classList.remove('flex');
        tech.classList.add('hidden');
    })
   tips.forEach((tips) => {
        tips.classList.add('hidden');
        tips.classList.remove('flex');
   })
   travel.forEach((travel) => {
        travel.classList.remove('hidden');
        travel.classList.add('flex');
   })
} );

tipstricks.addEventListener('click', () => {
    tech.forEach((tech) => {
        tech.classList.remove('flex');
        tech.classList.add('hidden');
    })
   travel.forEach((travel) => {
       travel.classList.remove('flex');
       travel.classList.add('hidden');
   })
   tips.forEach((tips) => {
        tips.classList.remove('hidden');
        tips.classList.add('flex');
   })
});

technology.addEventListener('click', () => {
    tips.forEach((tips) => {
        tips.classList.remove('flex');
        tips.classList.add('hidden');
    })
   travel.forEach((travel) => {
       travel.classList.remove('flex');
       travel.classList.add('hidden');
   })
   tech.forEach((tech) => {
        tech.classList.remove('hidden');
        tech.classList.add('flex');
    })
});
