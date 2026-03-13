function calcularImc(
  peso: number,
  altura: number
): number {
  return peso / (altura * altura);
}

const meuPeso = 80;
const minhaAltura = 1.80;
console.log(calcularImc(meuPeso, minhaAltura));