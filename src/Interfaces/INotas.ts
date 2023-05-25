export interface INotas {
  disciplineAssessment: (dis: string) => object[] | string,
  averageOne: (name: string) => object | string,
  finalResultOne: (name: string) =>object | string,
}