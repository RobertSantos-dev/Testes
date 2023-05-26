import Notas from "../Functions/Notas";
import { averageAllMock, disciplineNotes } from "./Mocks/NotasMock";

describe('Testes da classe Notas', () => {
  describe('Função [disciplineAssessment]', () => {
    it('01 - É retornado as notas de uma disciplina', () => {
        const instancie = new Notas();
    
        expect(instancie.disciplineAssessment('matematica'))
          .toEqual(disciplineNotes);
      });
      it('02 - É retornado uma mensagem', () => {
        const instancie = new Notas();

        expect(instancie.disciplineAssessment('fisica'))
          .toBe('A disciplina não existe');
      });
  });

  describe('Função [averageOne]', () => {
    it('01 - É retornado um object da media um aluno', () => {
      const instancie = new Notas();

      expect(instancie.averageOne('Robert')).toEqual(averageAllMock[0]);
    });
    it('02 - É retornado uma mensagem caso o aluno não exista', () => {
        const instancie = new Notas();

        expect(instancie.averageOne('Bob')).toBe('Aluno não registrado');
      });
  });
});
