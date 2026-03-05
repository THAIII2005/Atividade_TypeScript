function verificarMaioridade(
  idade: number
): boolean {
  return idade > 18;
}

console.log(verificarMaioridade(20)); 
console.log(verificarMaioridade(18)); 
console.log(verificarMaioridade(15)); 