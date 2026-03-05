interface Produto {
    id: number,
    nome: string,
    preco: number,
    descricao?: string
}

function formatarProduto(produto : Produto): string{
    return `[ID: ${produto.id}] ${produto.nome} - R$ ${produto.preco.toFixed(2)} (${produto.descricao})`;
}

const produto1 : Produto = {
    id: 1, 
    nome: "Livro de Centopeias",
    preco: 900
}

const produto2 : Produto = {
    id: 2,
    nome: "Livro de Borboleta",
    preco: 80,
    descricao: "Alto e bonito"
}

console.log(formatarProduto(produto1));
console.log(formatarProduto(produto2));
