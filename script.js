
document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
})

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

// Sofie start
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

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Sofie slut