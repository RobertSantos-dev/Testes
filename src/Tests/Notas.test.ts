import Notas from "../Functions/Notas";
import { averageAllMock, finalResultMock } from "./Mocks/NotasMock";

describe('Testes da classe Notas', () => {
  describe('Função [disciplineAssessment]', () => {
    it('01 - É retornado as notas de uma disciplina', () => {
        const instancie = new Notas();
        const result = [
          { name: "Robert", matematica: [6.5, 4.0, 9.0, 8.5] },
          { name: "Gabriel", matematica: [7.5, 3.0, 6.0, 4.5] },
          { name: "João", matematica: [9.0, 6.0, 6.0, 8.5] },
          { name: "Jessica", matematica: [6.0, 6.5, 7.0, 7.5] },
          { name: "Penélope", matematica: [9.0, 9.5, 10.0, 8.5] }
        ];
    
        expect(instancie.disciplineAssessment('matematica')).toEqual(result);
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

  describe('Função [finalResultOne]', () => {
    it('01 - É retornado um object com os resultados de um aluno', () => {
      const instancie = new Notas();

      expect(instancie.finalResultOne('Gabriel')).toEqual(finalResultMock[0]);
    });
    it('02 - É retornado uma mensagem caso o aluno não exista', () => {
        const instancie = new Notas();

        expect(instancie.finalResultOne('Bob')).toBe('Aluno não registrado');
      });
  });
});
