var valorfabrica = parseInt(prompt("Digite o custo de fábrica: "));
var valordistribuidor = (valorfabrica * 0.28) 
var valorimpostos = (valorfabrica * 0.45) 
var total = valorfabrica + valordistribuidor + valorimpostos;

document.write("O custo TOTAL do carro é: " + total);