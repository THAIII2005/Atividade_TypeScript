function contarOcorrencias<T>(array: T[], elemento: T): number {
    return array.filter((item) => item === elemento).length;
}

const frutas = ["maçã", "banana", "maçã", "uva", "maçã"];
console.log("Ocorrências de 'maçã':", contarOcorrencias(frutas, "maçã"));