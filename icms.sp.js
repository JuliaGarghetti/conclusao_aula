function calcularICMS(valor) {
  const aliquota = 0.18; // Alíquota de 18%
  const icms = valor * aliquota;
  return icms;
}

// Exemplo de uso da função
//const valorProduto = 550; // Substitua pelo valor do produto desejado
//const valorICMS = calcularICMS(valorProduto);
//console.log(`O valor do ICMS é: ${valorICMS}`);
module.exports = {calcularICMS}