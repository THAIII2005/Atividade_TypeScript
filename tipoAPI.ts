type ApiResponse<T> = {
 sucesso: boolean;
 dados: T | null;
 erro: string | null;
};
interface Usuario{
    id: number;
    nome: string;
    email: string;
}

function buscarUsuarios(): ApiResponse<Usuario[]>{
 const usuarioMockados: Usuario[] = [
    {id: 1, nome: "Thais Vitória", email:"thaisvitoriadr@gmail.com"},
    {id: 2, nome: "Vitor Silva", email:"vitorsilva123@gmail.com"}

 ];
 return {
    sucesso: true, 
    dados: usuarioMockados,
    erro: null
 };
}
const resposta = buscarUsuarios();

if(resposta.sucesso && resposta.dados){
    console.log("Deu Certo!", resposta.dados);
} else{
    console.log(`Deu Erro! ${resposta.erro}`);
}
