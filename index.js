const textArea = document.getElementById('texto')
const btnEnc = document.getElementById('encriptar')
const btnDes = document.getElementById('desencriptar')
const salida = document.getElementById('salida')

const llaves = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}
const regex = /[aeiou]/g;

function encriptar() {
    const text = textArea.value
    let newText = text.replaceAll(regex, (coincidencia) => {
        return llaves[coincidencia]
    })
    salida.innerHTML = newText
}

btnEnc.addEventListener('click', encriptar)




