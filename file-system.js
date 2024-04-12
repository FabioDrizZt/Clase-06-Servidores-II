import fs from 'node:fs'

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log(err)
  } else {
    console.log({ text })
  }
})

console.log('Aqui comienzo a leer el archivo 2')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log(err)
  } else {
    console.log({ text })
  }
})
