import { alunos } from '../Json/notas.json';
import Notas from './Notas';

export default class Results {
  constructor(
    private file = alunos,
    private notas = new Notas
  ) {}

  public disciplineApproval(dis: string) {
    const filter = this.notas.disciplineAssessment(dis);
    if (typeof filter === 'string') return filter;

    const values: string[] = [];
    filter.forEach((e) => {
      const media = (e[dis][0] + e[dis][1] + e[dis][2] + e[dis][3]) / 4;
      if (media >= 6) values.push(e.name);
    });

    return { [dis]: values };
  }

  public finalResultOne(name: string) {
    const student = this.file.find((e) => e.name === name);
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
