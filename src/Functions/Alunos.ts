import { alunos } from '../Json/notas.json';
import { IAlunos } from '../Interfaces/IAlunos';

export default class Alunos implements IAlunos {
  private notas;
  constructor() { this.notas = alunos; }

  public names() {}
  public nameOne(name: string) {}
}
