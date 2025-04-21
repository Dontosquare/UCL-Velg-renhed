
document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
})

let burgerMenu = {
  menuItems: ['hjem', 'tnt', 'headspaceFam', 'stoet']
}

if (burgerMenu.menuItems.lenght > 0) {
  for (i = 0; i < burgerMenu.menuItems.length; i++) {

    const node = document.createElement('a');

    const textnode = document.createTextNode(burgerMenu.menuItems[i]);
  }
}


document.getElementById('hjem').onclick = function () {
    location.href = 'https://headspace.dk/'
}
document.getElementById('tnt').onclick = function () {
    location.href = 'https://headspace.dk/the-international-department/'
}
document.getElementById('headspaceFam').onclick = function () {
    location.href = 'https://headspace.dk/headspace-family/'
}
document.getElementById('stoet').onclick = function () {
    location.href = 'https://headspace.dk/stoet/'
}

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// SOFIE KODE START
// Har taget inspiration fra:
// https://www.w3schools.com/howto/howto_js_portfolio_filter.asp 
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

// "document" er en global variabel udstillet af browseren.
// vi tilføjer en event listener på eventet "DOMContentLoaded", som bliver 
// sendt ud når browseren er færdig med at indlæse hele siden.
// i den event listener eksekverer vi to metoder der henholdvis laver en "default"
// filtrering, efterfulgt af en metode der sætter event listeners på filter knapperne.
document.addEventListener("DOMContentLoaded", function () {
  filterSelection("gallery__alle");
  initFilterButtons();
});


// Filtrerer de viste frivillig-billeder baseret på den valgte kategori. 
// denne funktion tager imod en parameter, som vi forventer er en string.
// Denne string bruger vi til at filterer med
function filterSelection(category) {
  // sender en besked to browserens konsol om hvilken parameter værdi den modtager for debugging.
  console.log("Filtering by category: " + category);
  // vi tager alle elementer i dokumentet med class "gallery_column" (som er elementerne i galleriet)
  // og gemmer dem i et const array.
  const items = document.getElementsByClassName("gallery__column");
  // Sring "" Klassen der styrer synligheden. vi gemmer det her så det er lettere at ændre 
  // hvis nødvendigt
  const showClass = "gallery__show";

  // her looper vi igennem arrayet af galleri elementer
  for (let i = 0; i < items.length; i++) { 
    // Fjern altid "gallery_show"-klassen først for at skjule alle elementer
    items[i].classList.remove(showClass);

    // her tilføjer vi klassen der gør elementet synligt, hvor vi først laver et tjek
    // i en "if" der gør således:
    // "hvis category er i lig med "gallery_alle" er true 
    // ELLER elementet i arrayet fra index "i" indeholder samme class som parameteren "category" er TRUE
    if (category === "gallery__alle" || items[i].classList.contains(category)) {
      // tilføj værdien fra showClass til class listen på elementet i gallery arrayet
      items[i].classList.add(showClass); 
    }
  }
}

// metode der tilføjer event handlers til alle galleri filter knapper
// køre kun en gang
function initFilterButtons() {
  console.log("Initializing filter buttons."); // Så kan jeg se at den køre, når den skal
  // Det er Const variabel - gemmer containeren for filter knapperne
  const btnContainer = document.getElementById("gallery__filter_btns_container"); 
  // tjekker om btnContainer er false eller undefined, altså hvis den ikke findes stopper vi
  // kørslen her
  if (!btnContainer) return; 

  // fra btnContainer finder vi alle elementer med class name "gallery__filter__btn"
  // og gemmer dem i et array
  const btns = btnContainer.getElementsByClassName("gallery__filter__btn");

  // nu looper vi gennem btns arrayet med alle knapperne
  for (let i = 0; i < btns.length; i++) {
    // jeg tilføjer en event listener til hver knap for eventet "click"
    btns[i].addEventListener("click", function () {
      // looper igen over alle knapper og
      // fjerner "active"-klassen fra alle knapper
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("active");
      }
      // Tilføj "active"-klassen til den knap, der blev klikket på,
      // altså kalderen af eventet
      this.classList.add("active");

      // Hent data-filter attributten fra den valgte knap
      const category = this.getAttribute("data-filter");

      // Kald filterfunktionen med den valgte kategori fra knappens data attribut
      filterSelection(category);
    });
  }
}

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// SOFIE KODE SLUT
// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

// Mads section
// her laver vi et array som hedder ungerådgiver og putter vores billeder ind
let ungerådgiver = ['ungerådgiver_billede_2', 'ungerådgiver_billede_1'];
let chatRådgiver = ['chat-rådgiver_billede_1', 'chat-rådgiver_billede_2'];
let formidlingsfrivllig = ['formidlingsfrivillig_billede_1', 'formidlingsfrivillig_billede_2']

document.addEventListener("click", (Event) => {skift(Event, ungerådgiver)}) // her laver jeg en eventlistener som kalder på vores onClick function med navn skift
document.addEventListener("click", (Event) => {skift(Event, chatRådgiver)})
document.addEventListener("click", (Event) => {skift(Event, formidlingsfrivllig)})

const slideInLeft = [
  {
    transform: "translateX(-100%)",
    opacity: 0,
  },
  {
    transform: "translateX(0)",
    transform: "rotate(12deg)",
    opacity: 1,
  }
]
const slideInLeftTiming = {
  duration: 2000,
  iterations: 1,
}

const slideInRight= [
  {
    transform: "translateX(100%)",
    opacity: 0,
  },
  {
    transform: "translateX(0)",
    transform: "rotate(-9deg)",
    opacity: 1,
  }
]
const slideInRightTiming = {
  duration: 2000,
  iterations: 1,
}

// delay function kører også venter den X antal tid
function delay(ms,) {
    return new Promise(resolve => setTimeout(resolve,ms)); // laver et nyt "promise" objekt som laver en resolve funktion som bliver kaldt med det simme i "setTimeout" funktionen som venter x anatal tid
}

// her bruger jeg async funktionen da jeg gerne vil vente på "new promise" objected fra tidligere
async function displayOneAtATime(time, array) {
    if (array != null){    // if statement som checker at der er billede i arrayed og hvis ikke der er det bliver der vist "Ingen billeder!" i console
        
        for (let i = 0; i < array.length; i++) { // standard for loop 
            document.getElementById(array[i]).style.opacity = "0"; // her sætter jeg alle billeder i arrayes opacity til 0
        }
        
        for (let i = 0; i < array.length; i++) { // præcis det samme som før standard for loop
            await delay (time) // her kalder jeg på delayed for at give 1 sekund før den gør billederne synlig
            document.getElementById(array[i]).style.opacity = "1"; // her sætter jeg alle billeder i arrayes opacity til 1

            let selectedPicture = document.getElementById(array[i]) // vi laver en variable som hedder selectedPicture og siger den skal være det samme som vores array
            if (selectedPicture.className == "venstre__billede") { // vi laver et if state som tager alle billeder med classen venstre
              selectedPicture.animate (slideInLeft, slideInLeftTiming); // og siger den skal udføre den her animation som vi lavede tidligere
            }
            else {
              selectedPicture.animate (slideInRight, slideInRightTiming); // her er et else statement som siger alle billeder som ikke har classen venstre skal gøre den her animation
            }
        }
    }
    else {
    console.log("Ingen billeder!") // passer til vores if statement fra tidligere
    }
}
displayOneAtATime(1000, ungerådgiver); // her giver jeg funktionen displayOneAtATime et augument på 1000 ms i det tilfælde
displayOneAtATime(1000, chatRådgiver);
displayOneAtATime(1000, formidlingsfrivllig);

function skift(event, array) { // her laver vi en function som vi kalder skift som indebære et parameter
    let billede_1 = document.getElementById(array[0]) // her laver jeg en variabel som hedder billede_1 hvor vi kalder vores første billede i arrayed
    let billede_2 = document.getElementById(array[1]) // her gør vi det samme bare med det andet billede
    if (event.target.id == billede_1.id){ // her laver jeg et if statement som checker at vores "Target id" er samme value som vores billede_1 variable hvis ikke den er det går det bare videre i koden
        billede_1.style.zIndex = 2 // når vores "Target id" bliver klikket på vil den ændre vores z-index
        billede_2.style.zIndex = 1 // den her linje gør det samme men ændre bare vores billede_2 z-index
    }
    if (event.target.id == billede_2.id){ // den her if statement gør det samme bare reverse
        billede_1.style.zIndex = 1
        billede_2.style.zIndex = 2
    }
}

// Chris
let slideIndex = 0; /*Opretter en variabel slideIndex, som holder styr på, hvilket slide der vises.*/
showSlides();

function showSlides() { /*Definerer funktionen showSlides(), som styrer billedskift i slideshowet.*/
  let i;
  let slides = document.getElementsByClassName("mySlides"); /*Henter alle elementer med klassen "mySlides" (billederne i slideshowet).*/
  let dots = document.getElementsByClassName("dot"); /*Henter alle elementer med klassen "dot" (indikatorprikkerne for slideshowet).*/
  for (i = 0; i < slides.length; i++) { /*Skjuler alle slides ved at sætte deres display til "none".*/
    slides[i].style.display = "none";
  }
  
  slideIndex++; /*Øger slideIndex med 1 for at vise det næste slide.*/
  if (slideIndex > slides.length) {slideIndex = 1} /*Hvis slideIndex bliver større end antallet af slides, nulstilles det til 1, så slideshowet starter forfra.*/
  for (i = 0; i < dots.length; i++) { /*Fjerner "active"-klassen fra alle indikatorprikker, så de ikke er markeret som aktive.*/
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block"; /*Viser det aktuelle slide ved at sætte display til "block".*/
  dots[slideIndex-1].className += " active"; /*Tilføjer "active"-klassen til den tilhørende indikatorprik for at vise, hvilket slide der er aktivt.*/
  setTimeout(showSlides, 5000); /* Kalder showSlides() igen efter 5 sekunder for at skifte til næste slide automatisk.*/
}