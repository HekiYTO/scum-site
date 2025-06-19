let button = document.querySelector('.butonari');

function calculate() {
    let in1 = document.querySelector('.in1');
    let in2 = document.querySelector('.in2');
    let res = document.querySelector('.resultat');

    let val1 = Number(in1.value);
    let val2 = Number(in2.value);

    let resu = (((val1*2 + val2*10) - val1 * 2.5) + 20);

    if (resu <= 0) {
    resu = 0;
    }

    res.innerHTML = `Your fly to Donbass will cost ${resu}$`;
}

button.addEventListener('click', calculate);