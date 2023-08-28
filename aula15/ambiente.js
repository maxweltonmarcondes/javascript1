let num = [5, 8, 2, 9, 3]
num.push(1)

console.log(num)
console.log(`Nosso vetor é o ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}

num.sort()