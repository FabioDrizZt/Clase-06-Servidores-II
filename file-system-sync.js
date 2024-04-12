import fs from 'node:fs'

const text1 = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text1)

console.log('Aqui comienzo a leer el archivo 2')

const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2)
