
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
/*lav if else i signup letteren*/

// Sofie
filterSelection("alle")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "alle") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Mads section
// her laver vi et array som hedder ungerådgiver og putter vores billeder ind
let ungerådgiver = ['ungerådgiver_billede_2', 'ungerådgiver_billede_1'];
let chatRådgiver = ['chat-rådgiver_billede_1', 'chat-rådgiver_billede_2'];
let formidlingsfrivllig = ['formidlingsfrivillig_billede_1', 'formidlingsfrivillig_billede_2']

document.addEventListener("click", (Event) => {skift(Event, ungerådgiver)}) // her laver jeg en eventlistener som kalder på vores onClick function med navn skift
document.addEventListener("click", (Event) => {skift(Event, chatRådgiver)})
document.addEventListener("click", (Event) => {skift(Event, formidlingsfrivllig)})

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