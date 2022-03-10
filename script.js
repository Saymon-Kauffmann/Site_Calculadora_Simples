function fazer_calculo() {
    let primeiro_numero = document.getElementById('primeiroNumero')
    let segundo_numero = document.getElementById('segundoNumero')
    let mostraRESULTADO = document.getElementById('tabela')
    let P_NUM = Number(primeiro_numero.value)
    let S_NUM = Number(segundo_numero.value)

    let operacoes = document.getElementsByName('operaçao')
    // Somando
    if (operacoes[0].checked) {
        let res_op = P_NUM + S_NUM
        let item = document.createElement('option')
        item.text = `${P_NUM} + ${S_NUM} = ${res_op}`
        mostraRESULTADO.appendChild(item)
    }

    // Subtraindo
    if (operacoes[1].checked) {
        let res_op = P_NUM - S_NUM
        let item = document.createElement('option')
        item.text = `${P_NUM} - ${S_NUM} = ${res_op}`
        mostraRESULTADO.appendChild(item)
    }

    // Dividindo
    if (operacoes[2].checked) {
        let res_op = P_NUM / S_NUM
        let item = document.createElement('option')
        item.text = `${P_NUM} ÷ ${S_NUM} = ${res_op}`
        mostraRESULTADO.appendChild(item)
    } 

    // Multiplicando
    if (operacoes[3].checked) {
        let res_op = P_NUM * S_NUM
        let item = document.createElement('option')
        item.text = `${P_NUM} x ${S_NUM} = ${res_op}`
        mostraRESULTADO.appendChild(item)
    }
    
}

function limpar_lista() {
    let apagar = document.getElementById('tabela')
    apagar.innerHTML = ''
}

