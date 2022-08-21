
aula 
const arrayString = ["banana", " jaca", "limão"]
const arrayNumber = [8, 5, 6]
const arraySortido = ["laranja", 12, true]
const arrayNum = [20]
const arrayVazio = [] 

 console.log(arrayString.length)          // verifica a quantidade de indice
 console.log(arrayString[2])              // verifica a posição do indice
 console.log(arrayString)                 // mostra o conteúdo do array
 console.log(arraySortido.includes(12))   // verifica se tem um determinado intem no array
 console.log(arrayVazio)                  // array vazio
 console.log(arrayVazio.length)           // array vazio, quantitade

  let copiaArrayString = arrayString       // fazendo uma copia do array
 console.log(copiaArrayString)            // mastrando no console

copiaArrayString.push("Uva")             // acrescentando mais um item "Uva"
 console.log(copiaArrayString)            // mostrando a copia do array no console
 console.log(arrayString)                 // mostrando o array principal 

let copiaArrayString = arrayString.slice(1, )
 console.log(copiaArrayString)

 copiaArrayString.push("Uva")
 console.log("copia", copiaArrayString)
 console.log("original", arrayString)

copiaArrayString.pop()
console.log(copiaArrayString)

 copiaArrayString.splice(2, 2)
 console.log(copiaArrayString)

 let arrayartur = ["A", "B", "C", "D", "E"]
 console.log(arrayartur)
 arrayartur.splice(2, 2)
 console.log(arrayartur) 

 arrayString.sort()
 console.log(arrayString)

exercicios da aula

console.log("Números do array")
const numeros = [5, 9, 4, 6, 9, 7, 2, 5, 4, 5]
console.log(numeros)

numeros.sort()            // serve para por em ordem crecente e também para por em ordem alfabetica. 
console.log(numeros)

numeros.reverse()         // serve para por em ordem decrecente. 
console.log(numeros)

numeros.pop()
console.log(numeros)      // serve para retirar o último número ou item do array. 

numeros.push(6)
console.log(numeros)      // serve para acrescentar um número ou item no array.

numeros.splice(2, 1)
console.log(numeros)

