import Results from "../Functions/Results";
import { finalResultMock, disciplineApproval } from "./Mocks/ResultsMock";

describe('Testes da classe Results', () => {
  describe('Função [finalResultOne]', () => {
    it('01 - É retornado um object com os resultados de um aluno', () => {
      const instancie = new Results();
      expect(instancie.finalResultOne('Robert')).toEqual(finalResultMock[0]);
      expect(instancie.finalResultOne('Gabriel')).toEqual(finalResultMock[1]);
    });
    it('02 - É retornado uma mensagem caso o aluno não exista', () => {
        const instancie = new Results();

        expect(instancie.finalResultOne('Bob')).toBe('Aluno não registrado');
    });
  });
  
  describe('Função [disciplineApproval]', () => {
    it('01 - É retornado os alunos aprovados em uma disciplina', () => {
      const instancie = new Results();

      expect(instancie.disciplineApproval('portugues'))
          .toEqual(disciplineApproval[0]);
        expect(instancie.disciplineApproval('ingles'))
          .toEqual(disciplineApproval[1]);
    });
    it('02 - É retornado uma mensagem caso o aluno não exista', () => {
      const instancie = new Results();
      expect(instancie.disciplineApproval(''))
        .toBe('A disciplina não existe');
    });
  });
});
