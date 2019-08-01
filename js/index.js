var indiceofpollution = parseFloat(prompt("Digite o índice de poluição (de 0.05 à 0.5): "));

if (indiceofpollution >= 0.05 && indiceofpollution <= 0.25) {
	document.body.append("Índice de Poluição: ACEITÁVEL!")
}else if (indiceofpollution <= 0.3) {
	document.body.append("GRUPO 1 - ATIVIDADES SUSPENSAS!")	
}else if (indiceofpollution > 0.3 && indiceofpollution <= 0.4) {
	document.body.append("GRUPO 1 E GRUPO 2 - ATIVIDADES SUSPENSAS!")	
}else {
	document.body.append("TODOS OS GRUPOS - ATIVIDADES SUSPENSAS!")	
}