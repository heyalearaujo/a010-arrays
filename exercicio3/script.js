let arrayOriginal = [18, 23, 16]
let arrayOriginal1 = ["tchau", "bye", "adiós"]
let arrayOriginal2 = ["bonjour", 18, false]
let copiaDoArray = arrayOriginal.slice()
copiaDoArray.push(8)
console.log("Original:", arrayOriginal)
console.log("Adicionar um number na Array:", copiaDoArray)
let copiaDoArray1 = arrayOriginal1.slice()
arrayOriginal1.pop()
console.log("Original:", arrayOriginal1)
console.log("Remover o último item da Array: ", copiaDoArray1)
let copiaDoArray2 = arrayOriginal2.slice()
copiaDoArray2.splice(1,1)
console.log("Original:", arrayOriginal2)
console.log("Remover o segundo item da Array:", copiaDoArray2)


