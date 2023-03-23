function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        alert('[ERR0]Adicione os valores corretamentes!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente.
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${ c } \u{1F449}`
            }
        } else {
            //Contagem Regressiva.
            for(let c = i; c >= f; c -=p) {
                res.innerHTML += ` ${ c } \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`

        }
    } 
}