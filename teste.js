function validarPrimeiraLetraZ(string) {
    if (string.charAt(0) === 'Z') {
      return true;
    } else {
      return false;
    }
  }
  console.log(validarPrimeiraLetraZ("Zorro")); // true
  console.log(validarPrimeiraLetraZ("Batman")); // false

module.exports = {validarPrimeiraLetraZ}
