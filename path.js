import {
  sep,
  join,
  resolve,
  basename,
  dirname,
  extname,
  parse,
} from 'node:path'

// Concatenar dir y archivo
const directorio = '/ruta/principal'
const archivo = 'archivo.txt'
const rutaCompleta = join(directorio, archivo)
console.log({ rutaCompleta })
// Obtener Ruta Absoluta
const rutaRelativa = '../carpeta/archivo.txt'
const rutaAbsoluta = resolve(rutaRelativa)
console.log({ rutaRelativa, rutaAbsoluta })

// Obtener datos de una ruta
const ruta = '/ruta/principal/archivo.txt'
const nombreArchivo = basename(ruta)
const nombreDirectorio = dirname(ruta)
const extension = extname(ruta)
// const {root,dir,base,ext,name} = parse(ruta)
console.table({ nombreArchivo, nombreDirectorio, extension })
console.table(parse(ruta))

// barra separadora de carpeta segun SO (windows \, linux /)
console.log(sep)
