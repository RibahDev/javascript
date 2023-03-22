function calc() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var msg = document.getElementById('msg')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.src = 'imagens/crianca-h.png'
            }else if (idade < 21) {
                img.src = 'imagens/adol-h.png'
            }else if (idade < 50) {
                img.src = 'imagens/homem.png'
            }else {
                img.src = 'imagens/idoso.png'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.src = 'imagens/crianca-m.png'
            }else if (idade < 21) {
                img.src = 'imagens/adol-m.png'
            }else if (idade < 50) {
                img.src = 'imagens/mulher.png'
            }else {
                img.src = 'imagens/idosa.png'
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.appendChild(img)
        img.style.boxShadow ='2px 2px 5px #0000005e'
        img.style.borderRadius = '50%'
    }
}