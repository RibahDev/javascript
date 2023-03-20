var idade = 25
console.log(`Você tem ${idade} Anos.`)
if (idade < 16) {
    console.log('Não Vota.')
}else if (idade < 18 || idade > 65) {
        console.log('Pode Votar, mas Não é obrigatorio')
    }else {
            console.log('Voto Obrigatório!')
        }
    
