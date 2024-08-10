function handleForm(){
    let nome = document.getElementById("nome").value
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value

    let imc = (peso/(altura*altura)).toFixed(1)

    let resultado = ""
    
    if (imc < 16.9){
        resultado = "muito abaixo do peso"
    }else if(imc < 18.4 && imc > 17){
        resultado = "abaixo do peso"
    }else if(imc < 24.9 && imc > 18.5){
        resultado = "com peso normal"
    }else if(imc < 29.9 && imc > 25){
        resultado = "acima do peso"
    }else if(imc < 34.9 && imc > 30){
        resultado = "com obesidade grau I"
    }else if(imc < 40 && imc > 35){
        resultado = "com obesidade grau II"
    }else if(imc>40){
        resultado = "com obesidade grau III Cuidado!!!"
    }

    const mensagem = `${nome}, seu IMC é ${imc} e você está ${resultado}.`
    if (nome, altura, peso != ""){
            document.getElementById("resultado").innerText=mensagem
        
    }else{
        document.getElementById("resultado").innerText="Preencha todos os campos!"
        
    }
}

function zerar(){
    document.getElementById("nome").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("resultado").innerText = ""
}

