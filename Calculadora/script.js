const container = document.querySelector(".teclas");
const view = document.getElementById("view")
let valor = "";
let flag = false;
let number = 0;
let total = 0;

container.addEventListener("click", e => {
    if(e.target.classList.contains("button") || e.target.classList.contains("btns")) {

        if(e.target.textContent.trim() === "AC"){
            total = 0;
            view.innerHTML = "";
            return;
        }

        if(e.target.textContent.trim() === "+"){
            total += number;
            number = 0;
            view.innerHTML = "+"
            flag = true;
            valor = "+";
            return ;
        }

        if(e.target.textContent.trim() === "-"){
            total += number;
            number = 0;
            view.innerHTML = "-"
            flag = true;
            valor = "-";
            return;
        }

        if(e.target.textContent.trim() === "x"){
            total += number;
            number = 0;
            view.innerHTML = "x"
            flag = true;
            valor = "*";
            return;
        }

        if(e.target.textContent.trim() === "/"){
            total += number;
            number = 0;
            view.innerHTML = "/"
            flag = true;
            valor = "/";
            return;
        }

        if(e.target.textContent.trim() === "="){
            console.log(total,number,valor);
            const valorFinal = resultado(valor,total,number);
            view.innerHTML = valorFinal;
            return;
        }

        const texto = e.target.textContent.trim();
        const visorAtual = view.innerHTML;

        if(texto === "." && visorAtual.includes(".")){
            return;
        }

        if(flag === true){
            view.innerHTML = texto === "." ? "0." : texto;
            number = Number(view.innerHTML);
            flag = false;
        } else {
            view.innerHTML = visorAtual + texto;
            number = Number(visorAtual + texto);
        }


    }

})

function resultado(operador,num1,num2){
    switch(operador){
        case "+":
            return num1 + num2;
            break
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
    }
};