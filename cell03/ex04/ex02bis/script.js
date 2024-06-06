const numero1 = $("#number1")
const numero2 = $("#number2")
const buttonOperacao = $("#calculadora-button")

function fazOperacao() {
    let operacao = $("#operacao option:selected")

    if(numero1.val() !== "" && numero2.val() !== "") {

        let sinal = operacao.text()

        let iNumero1 = +numero1.val()
        let iNumero2 = +numero2.val()
        let Total  = 0

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
                    Total = (iNumero1 / iNumero2).toFixed(2);
                    break;
                case "%":
                    let Total1 = iNumero1 % iNumero2;
                    let Total2 = (iNumero1 / 100) * iNumero2;
                    alert("O resultado final é: " + Total1 + "\n" + "O resultado final é: " + Total2.toFixed(2));
                    break;
            }
    
            if (sinal !== "%") {
                
                alert("O resultado final é: " + Total)
            }
        }

        

    } else {
        alert("preencha todos os campos")
    }


}

buttonOperacao.on("click", fazOperacao)

function mostrarPopup() {
    const popup = $('.popup-alert');
    
    // popup.classList.remove('disable');
    popup.removeClass("disable")
    
    setTimeout(() => {
      popup.addClass('disable');
    }, 10000);

}
  



setInterval(mostrarPopup, 30000);

