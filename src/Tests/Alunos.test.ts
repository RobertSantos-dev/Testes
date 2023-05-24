import Alunos from "../Functions/Alunos";
import { alunos } from "../Json/notas.json";

describe('Testes a classe Alunos', () => {
  it('01 - [names] Os nomes de todos os alunos são retornados corretamente', () => {
    const instancie = new Alunos();
    const result = ['Robert', 'Gabriel', 'João', 'Jessica', 'Penélope'];

    expect(instancie.names()).toEqual(result);
  });

  it('02 - [nameOne] É retornado o aluno selecionado', () => {
    const instancie = new Alunos();

    expect(instancie.nameOne('Gabriel')).toEqual(alunos[1]);
  });

  it('03 - [nameOne] É retornado uma mensagem caso o aluno não exista', () => {
    const instancie = new Alunos();

    expect(instancie.nameOne('Bob')).toBe('Aluno não foi registrado');
  });
})