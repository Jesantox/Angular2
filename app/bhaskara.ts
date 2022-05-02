
// 🔴 Criar uma aplicação que resolva Equações do 2° Grau | Bhaskara

// ⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻⸻

const nomeApp = 'Equações do 2° Grau - Bhaskara'

let raizExata = function () {}

let bhaskara = function (a: number, b: number, c: number)  {

    let formula01 = (b**2) - 4 * a * c
    let x1 = (-b + Math.sqrt(formula01)) / 2 * a
    let x2 = (-b - Math.sqrt(formula01)) / 2 * a

    let resultadox1 = 'Valor do X1 : ' + x1
    let resultadox2 = 'Valor do X2 : ' + x2
    
    raizExata = function () {
        if(x1 > 0) { console.log('A raiz exata é : ' + x1) }
        else { console.log('A raiz exata é : ' + x2)}

        return ''
    }

    console.log()
    console.log(resultadox1)
    console.log(resultadox2)
    return ''
}

console.log()
console.log('Aplicação : ' + nomeApp)
console.log(bhaskara(1, -1, -12))
console.log(raizExata())