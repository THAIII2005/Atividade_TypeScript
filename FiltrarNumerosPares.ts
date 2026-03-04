function filtrarPares(numeros: number[]): number[] {
    return numeros.filter((numero) => numero % 2 === 0);
}

const meusNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultadoPares = filtrarPares(meusNumeros);

console.log("Os números originais:", meusNumeros);
console.log("Apenas os pares:", resultadoPares);