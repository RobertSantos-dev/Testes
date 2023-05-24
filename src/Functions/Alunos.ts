import { alunos } from '../Json/notas.json';
import { IAlunos } from '../Interfaces/IAlunos';

export default class Alunos implements IAlunos {
  constructor(private notas = alunos) {}

  public names() {
    return this.notas.map(({ name }) => name);
  }

  public nameOne(name: string) {
    const result = this.notas.filter((e) => name === e.name);
    if (result.length === 0) return 'Aluno não foi registrado';

    return result[0];
  }
}
