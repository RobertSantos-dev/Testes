import { alunos } from '../Json/notas.json';

export default class Results {
  constructor(private notas = alunos) {}

  public disciplineApproval(dis: string) {
    if (!dis) return '';

    return {}
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
