import { alunos } from "../Json/notas.json";
import { INotas } from "../Interfaces/INotas";

export default class Notas implements INotas {
  constructor(private notas = alunos) {}

  public disciplineAssessment(dis: string) {}

  public averageOne(name: string) {};
}