// 1. Declare uma variável de nome weight
let weight;
// 2. Que tipo de dado é a variável acima?
console.log(weight) //undefined
/* 
  3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubcribed: Boolean 
*/

let name = "Pedro"
let age = 21
let stars = 13.5
let isSubcribed = true

/* 
  4. A variável student  abaixo é de que tipo de dados? 
  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
  4.2 Mostre no console.log a seguinte menssagem:

  <name> de idade <age> pesa <weight> kg.

  Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
let student = {
  name: "Temaker",
  age: 21,
  weight: 60.5
}

console.log(student.name + " de idade " + student.age + " pesa " + student.weight + "kg.")
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`)


/* 
  5. Declare uma variáveldo tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

*/
let students = []

/* 
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copia e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
  student
]


/* 
  7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/* 
  8. Crie um novo student e coloque na posição 1 do Array students
*/

let studant2 = {
  name: "pedro",
  idade: 21,
  altura: 61.1
}

students[1] = studant2

console.log(students)

/* 
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? após sua reposta, rode o código e veja se você acetou.

  console.log(a)

  let a = 1
*/



