const button1 = document.querySelector('.contentbtn1');
const button2 = document.querySelector('.contentbtn2');
const button3 = document.querySelector('.contentbtn3');
const button4 = document.querySelector('.contentbtn4');
const button5 = document.querySelector('.contentbtn5');
const button6 = document.querySelector('.contentbtn6');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const hide = document.querySelectorAll('.hide');

button1.addEventListener('click', () => {
    content1.classList.remove('hide');
    button1.addEventListener('click', () => {
        content1.classList.add('hide');
    })
})

button2.addEventListener('click', () => {
    content2.classList.remove('hide');
    button2.addEventListener('click', () => {
        content2.classList.add('hide');
    })
})

button3.addEventListener('click', () => {
    content3.classList.remove('hide');
    button3.addEventListener('click', () => {
        content3.classList.add('hide');
    })
})

button4.addEventListener('click', () => {
    content4.classList.remove('hide');
    button4.addEventListener('click', () => {
        content4.classList.add('hide');
    })
})

button5.addEventListener('click', () => {
    content5.classList.remove('hide');
    button5.addEventListener('click', () => {
        content5.classList.add('hide');
    })
})

button6.addEventListener('click', () => {
    content6.classList.remove('hide');
    button6.addEventListener('click', () => {
        content6.classList.add('hide');
    })
})