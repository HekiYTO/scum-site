let button = document.querySelector('.butonari');

function calculate() {
    let in1 = document.querySelector('.in1');
    let in2 = document.querySelector('.in2');
    let res = document.querySelector('.resultat');
    let selectedPlane = document.querySelector('input[name="plane"]:checked');
    let multiplier = Number(selectedPlane.value);

    let val1 = Number(in1.value);
    let val2 = Number(in2.value);

    let resu = (((val1*2 + val2*10) - val1 * 2.5) + 20) * multiplier;

    if (resu <= 0) {
    resu = 'tottaly free';
    res.innerHTML = `Your fly to Donbass is ${resu}`;
    return
    }

    res.innerHTML = `Your fly to Donbass will cost ${resu}$`;
}

button.addEventListener('click', calculate);