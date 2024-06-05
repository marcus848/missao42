const numero1 = document.getElementById("number1")
const numero2 = document.getElementById("number2")
const operacao = document.getElementById("operacao")
const buttonOperacao = document.getElementById("calculadora-button")

function fazOperacao() {

    if(numero1.value !== "" && numero2.value !== "") {

        let sinal = operacao.options[operacao.selectedIndex].text
        let iNumero1 = +numero1.value
        let iNumero2 = +numero2.value
        let Total  = 0

        console.log("ddd")
        console.log(Number.isInteger(iNumero1))
        console.log(Number.isInteger(iNumero2))

        if (!Number.isInteger(iNumero1) || !Number.isInteger(iNumero2)) {
            alert("Error :(")
        } else if (iNumero2 === 0 && (sinal === "/" || sinal === "%")) {
            alert("It’s over 9000!")
        } else {
            switch (sinal) {
                case "+":
                    Total = iNumero1 + iNumero2;
                    break;
                case "-":
                    Total = iNumero1 - iNumero2;
                    break;
                case "*":
                    Total = iNumero1 * iNumero2;
                    break;
                case "/":
                    Total = iNumero1 / iNumero2;
                    break;
                case "%":
                    let Total1 = iNumero1 % iNumero2;
                    let Total2 = (iNumero1 / 100) * iNumero2;
                    alert("O resultado final é: " + Total1 + "\n" + "O resultado final é: " + Total2.toFixed(2));
                    console.log("resultado 1: ", Total1);
                    console.log("resultado 2: ", Total2);
                    break;
            }
    
            if (sinal !== "%") {
                
                alert("O resultado final é: " + Total)
                console.log("O resultado final é: " + Total)
            }
        }

        

    } else {
        alert("preencha todos os campos")
    }


}

buttonOperacao.addEventListener("click", fazOperacao)

function mostrarPopup() {
    const popup = document.querySelector('.popup-alert');
    
    popup.classList.remove('disable');
    
    setTimeout(() => {
      popup.classList.add('disable');
    }, 10000);
}
  

setInterval(mostrarPopup, 30000);

