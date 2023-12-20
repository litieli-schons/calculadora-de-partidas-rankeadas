let saldoRankeadas = diferenca(250, 190)
let nivelHeroi = ""

function diferenca(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

switch(true){
    case saldoRankeadas <= 10:
        nivelHeroi = "Ferro"
        break

    case saldoRankeadas >= 11 && saldoRankeadas <= 20:
        nivelHeroi = "Bronze"
        break

    case saldoRankeadas >= 21 && saldoRankeadas <= 50:
        nivelHeroi = "Prata"
        break

    case saldoRankeadas >= 51 && saldoRankeadas <= 80:
        nivelHeroi = "Ouro"
        break

    case saldoRankeadas >= 81 && saldoRankeadas <= 90:
        nivelHeroi = "Diamante"
        break

    case saldoRankeadas >= 91 && saldoRankeadas <= 100:
        nivelHeroi = "Lendário"
        break

    case saldoRankeadas >= 101:
        nivelHeroi = "Imortal"
        break
}

console.log("O Herói tem de saldo de " + saldoRankeadas +" está no nível de " + nivelHeroi + "!")