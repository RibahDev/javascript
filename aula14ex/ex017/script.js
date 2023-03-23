function multiplicar() {
    let numero = document.querySelector('input#ntxt')

    if (numero.value.length == 0) {
        alert('Digite um Número para receber a Tabuada!')
    } else {
        let num = Number(numero.value)
        let tab = document.getElementById('tabu')
        tab.innerHTML = ''
        for (let n = 1; n <= 10; n++) {
            let resultado = num * n
            let item = document.createElement('option')
            item.value = resultado
            item.text = `${num} x ${n} = ${resultado}`
            tab.appendChild(item)
        }
    }

}