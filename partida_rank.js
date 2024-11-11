let ranking = rank(130,20)
console.log(`O Herói tem de saldo de ${ranking[0]} está no nível de ${ranking[1]}`)

function rank(vit, def) {
    let saldo = vit - def;

    if (saldo <= 10) { tier = [saldo, "FERRO"]}
    else if (saldo > 10 && saldo <= 20) {tier = [saldo, "BRONZE"]}
    else if (saldo > 20 && saldo <= 50) {tier = [saldo, "PRATA"]}
    else if (saldo > 50 && saldo <= 80) {tier = [saldo, "OURO"]}
    else if (saldo > 80 && saldo <= 90) {tier = [saldo, "DIAMANTE"]}
    else if (saldo > 90 && saldo <= 100) {tier = [saldo, "LENDÁRIO"]}
    else if (saldo > 100 ) {tier = [saldo, "IMORTAL"]}

    return tier;
}