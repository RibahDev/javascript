var now = new Date()
var mes = now.getMonth()
console.log(`Estamos no mês ${mes}`)
switch(mes) {
    case 0:
        console.log('Janeiro')
        break
    case 1:
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4:
        console.log('Maio')
        break
    case 5:
        console.log('Junho')
        break
    case 6:
        console.log('Julho')
        break
    case 7:
        console.log('Agosto')
        break
    case 8:
        console.log('Setembro')
        break
    case 9 :
        console.log('')
        break
    case 10:
        console.log('')
        break
    case 11:
        console.log('')
        break
    default:
        console.log('[ERRO] Algo deu errado.')
        break
}