function calcularTrintaPorcento(valor) {
    var percentual = 30;
    var resultado = (percentual / 100) * valor;
    return resultado;
  }
  
  //var valorOriginal = 50;
  //var valorTrintaPorcento = calcularTrintaPorcento(valorOriginal);
  //console.log("30% de", valorOriginal, "é", valorTrintaPorcento);
  module.exports = {calcularTrintaPorcento}
  