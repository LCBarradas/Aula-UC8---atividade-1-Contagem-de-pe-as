var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar"]

let peso = 50
if(peso < 100) {
    console.log ("A peça deve pesar no minimo 100g")
}else{
    console.log ("A peça possui o peso adequado")
}

var listaDePecas = ["Amortecedor", "Motor", "Filtro de ar"]
if(listaDePecas.length < 10) {
    console.log ("Ainda tem espaço")
}else{
    console.log ("Não tem mais espaço")
}

let nomePeca = "Disco de freio"
if (nomePeca.length > 3){
    console.log ("Nome da peça está adequado")
}else if (nomePeca.length == 0){
    console.log ("nome da peca não pode estar vazio")
}else{
    console.log ("Nome da peca precisa ter no minimo 3 caracteres") 
}