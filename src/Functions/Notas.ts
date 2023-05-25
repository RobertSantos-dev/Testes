import { alunos } from "../Json/notas.json";
import { INotas } from "../Interfaces/INotas";

export default class Notas implements INotas {
  constructor(private notas = alunos) {}

  public averageOne(name: string) {
    const student = this.notas.find((e) => e.name === name);
    if (!student) return 'Aluno não registrado';

    const result = { name, subjects: {} };

    Object.entries(student.subjects).forEach((e) => {
      const media = (e[1][0] + e[1][1] + e[1][2] + e[1][3]) / 4;
      result.subjects = {
        ...result.subjects,
        [e[0]]: Number(media.toFixed(1))
      }
    });

    return result;
  };

  public disciplineAssessment(dis: string) {
    const cond = dis in this.notas[0].subjects;
    if (!cond) return 'A disciplina não existe';

    return this.notas.map((e: any) => (
      { name: e.name, [dis]: e.subjects[dis] }
    ));
  }

  public finalResultOne(name: string) {
    const student = this.notas.find((e) => e.name === name);
    if (!student) return 'Aluno não registrado';

    const situation = { name, subjects: {}, result: 'Aprovado' };

    Object.entries(student.subjects).forEach((e) => {
      const media = (e[1][0] + e[1][1] + e[1][2] + e[1][3]) / 4;
      situation.subjects = {
        ...situation.subjects,
        [e[0]]: media >= 6 ? 'Aprovado' : 'Reprovado'
      };
      if (media < 6) situation.result = 'Reprovado'
    });

    return situation;
  };
}