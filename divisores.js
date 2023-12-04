const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>  {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let resposta = "  " 

    for (let i = 1; i <= num/2; i++){
        if (num % i == 0){
            resposta = resposta + i + ","

        }
    }
resp.innerText = `Divisores de ${num}: ${resposta}${num}.`
})