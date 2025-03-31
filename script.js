
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
