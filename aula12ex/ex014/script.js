function carregar() {
    var mensagem = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var hor = new Date()
    var min = new Date()
    var hora = hor.getHours()
    var minutos = min.getMinutes()
    mensagem.innerHTML = `<p>Agora são <strong>${hora} Horas</strong> e <strong>${minutos} min.</strong></p>`
    if (hora >= 00 && hora < 12) {
        foto.src = 'imagens/manha.png'
        document.body.style.background = '#FBE88D'
    } else if (hora >= 12 && hora <= 18) {
        foto.src = 'imagens/tarde.png'
        document.body.style.background = '#fc6703'
    } else {
        foto.src = 'imagens/noite.png'
        document.body.style.background = '#192528'
        
    }
}