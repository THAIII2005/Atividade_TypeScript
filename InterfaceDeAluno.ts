interface Aluno {
  nome: string;
  notas: number[];
  matricula: string;
}

function calcularMedia(aluno: Aluno): number {
  if (aluno.notas.length === 0) {
    return 0; 
  }
  const somaDasNotas = aluno.notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);
  return somaDasNotas / aluno.notas.length;
}

const alunoTeste: Aluno = {
  nome: "Flavio",
  notas: [8, 9, 7.5, 10],
  matricula: "123456789"
};
console.log("A média de Flavio é:", calcularMedia(alunoTeste));