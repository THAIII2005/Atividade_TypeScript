function formatarNome(nome: string, sobrenome?: string): string{
   if(sobrenome){
    return `Olá ${nome} ${sobrenome}!`;
   } 
   return `Olá, ${nome}!`;
}

console.log(formatarNome("Thais Vitória", "Dias Rosa"));

