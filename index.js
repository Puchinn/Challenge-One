const textArea = document.getElementById('texto')
const btnEnc = document.getElementById('encriptar')
const btnDes = document.getElementById('desencriptar')
const salida = document.getElementById('salida')
const btnCop = document.getElementById('copiar')

const llaves = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}
const regexLetras = /[aeiou]/g
const regexPalabras = /(ai|enter|imes|ober|ufat)/g

function encriptar() {
    const text = textArea.value
    const newText = text.replaceAll(regexLetras, (coincidencia) => {
        return llaves[coincidencia]
    })
    salida.innerHTML = newText
}

function desencriptar() {
    const text = textArea.value
    const newText = text.replaceAll(regexPalabras, (palabra) => {
        return Object.keys(llaves).find(llave => llaves[llave] === palabra)
    })
    salida.innerHTML = newText
}

function copiar() {
    const text = salida.textContent
    navigator.clipboard.writeText(text)
}

btnEnc.addEventListener('click', encriptar)
btnDes.addEventListener('click', desencriptar)
btnCop.addEventListener('click', copiar)




