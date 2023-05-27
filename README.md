# Testes
Aplicando testes com jest, praticando os melhores metodos.

Esse é um projeto que buscar adaptar, revisar e estudar **Metodologias** e estabelecer boas praticas, seja para testes unitários ou funcionalidades, além de conhecer mais sobre alguns conceitos.

</hr>
</br>

## Sumário
[Explicação](#explicação)

[Conhecimentos e Ferramentas](#conhecimentos-e-ferramentas)

[Status](#status)


</hr>
</br>

## Explicação
O projeto funciona a partir de um arquivo *json* que contem os nomes de alunos e suas notas em respectivas disciplinas. Veja a seguir:

### Estrutura
<details>
  <summary>JSON</summary>
  <pre>
  <code>
{
  "alunos": [
    {
      "name": "Robert",
      "subjects": {
        "portugues": [5.5, 8.0, 7.5, 5.5],
        "matematica": [6.5, 4.0, 9.0, 8.5],
        "historia": [8.5, 7.5, 6.5, 10],
        "geografia": [3.5, 7.5, 9.0, 8.5],
        "ingles": [7.5, 8.0, 6.5, 5.5]
      }
    },
    {
      "name": "Gabriel",
      "subjects": {
        "portugues": [6.5, 7.0, 7.5, 4.5],
        "matematica": [7.5, 3.0, 6.0, 4.5],
        "historia": [10, 7.5, 2.5, 4.5],
        "geografia": [3.5, 8.5, 5.0, 8.5],
        "ingles": [4.5, 4.0, 6.5, 8.0]
      }
    },
    {
      "name": "João",
      "subjects": {
        "portugues": [6.5, 8.0, 6.5, 4.5],
        "matematica": [9.0, 6.0, 6.0, 8.5],
        "historia": [7.0, 6.5, 5.5, 5.5],
        "geografia": [6.5, 8.5, 4.0, 7.5],
        "ingles": [5.5, 3.0, 4.5, 6.0]
      }
    },
    {
      "name": "Jessica",
      "subjects": {
        "portugues": [6.5, 5.0, 8.5, 10.0],
        "matematica": [6.0, 6.5, 7.0, 7.5],
        "historia": [4.0, 6.5, 7.5, 5.5],
        "geografia": [6.0, 8.0, 8.0, 6.5],
        "ingles": [7.5, 8.0, 8.5, 9.0]
      }
    },
    {
      "name": "Penélope",
      "subjects": {
        "portugues": [7.5, 7.0, 6.0, 8.0],
        "matematica": [9.0, 9.5, 10.0, 8.5],
        "historia": [6.0, 5.5, 8.5, 5.0],
        "geografia": [7.0, 8.0, 9.0, 6.0],
        "ingles": [6.5, 7.5, 9.5, 8.0]
      }
    }
  ]
}
  </code>
  </pre>
</details>

</br>

Perceba que o arquivo acima, `notas.json`, é simples, pois o objetivo é construir **metodos** ou **funções** que possam fazer as demais tarefas de forma automatizada. Seja pra conseguir saber o *resultado final* ou até mesmo a *média* de cada aluno por disciplina.

</br>

De ante de tantas possiblidades, algumas dessas funcionalidades foram criadas de forma separada, cada uma responsavel por propocionar recursos que melhoram a experiencia de uso delas. As `class` usadas foram:
- `Alunos`: Contem métodos que trabalham usando nomes dos alunos.
- `Notas`: Contem métodos que trabalham usando as notas dos alunos.
- `Results`: Contem métodos que calcula os resultados dos alunos.

</br>

### Testes Unitários
Os `tests unitários` são usados no projeto, e arquivos que contem exemplos de retorno estão localizados dentro de uma pasta chamada *Mocks*:
- `src/Tests/Alunos.test.ts`
- `src/Tests/Notas.test.ts`
- `src/Tests/Results.test.ts`

</hr>
</br>

## Conhecimentos e Ferramentas
- POO
- SOLID
- TDD
- HOFs
- Arquitetura
- Jest
- Typescript

</hr>
</br>

## Status
🚨 Ainda em desenvolvimento.
