let button = document.querySelector('.button')
let input = document.querySelector('.donatesumm')
let dt = document.querySelector('.sumdonatelabel')

function donate() {
    let sum = input.value
    dt.innerHTML = `You have donated ${sum}$!`;
}

button.addEventListener('click', donate)