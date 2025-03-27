
document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });
});


/*
const naming = document.getElementById('name')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('username')
const form = getElementById('form')
const errorElement = document.getElementById('error')

document.addEventListener('DOMContentLoaded', () => {
form.addEventListener('submit', (e) => {
    let messages = []
    if (naming.value === '' || naming.value == null) {
        messages.push('Venligst udfyld dette felt')
    }

    if (password.value.lenght <= 6) {
        messages.push('Kodeordet skal være mere end 6 tegn')
    }

    if (password.value.lenght >= 20) {
        messages.push('Kodeordet skal være mindre end 20 tegn')
    }

    if (password.value === 'password') {
        message.push('Kodeordet må ikke være password')
    }

    if (messages.lenght > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})})

*/