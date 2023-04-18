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

const regexLetras = new RegExp('[' + Object.keys(llaves).join('') + ']', 'g')
const regexPalabras = new RegExp('\(' + Object.values(llaves).join('|') + '\)', 'g')

function obtenerTexto() {
    const texto = textArea.value
    const regexText = /^[a-z\s0-9]+$/
    return regexText.test(texto) ? texto : false
}

function encriptar() {
    const text = obtenerTexto()
    if (!text) {
        alert('SIN MAYUSCULAS Y CARACTERES ESPECIALES CAPO')
        return
    }
    const newText = text.replaceAll(regexLetras, (coincidencia) => {
        return llaves[coincidencia]
    })
    salida.innerHTML = newText
}

function desencriptar() {
    const text = obtenerTexto()
    if (!text) {
        alert('SIN MAYUSCULAS Y CARACTERES ESPECIALES CAPO')
        return
    }
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


document.onload = ScrollHeight();
window.addEventListener('resize', function (event) {
    ScrollHeight();
});

function ScrollHeight() {
    const content = document.querySelector('.pergamino');
    const container = document.querySelector('.container');
    content.style.height = container.offsetHeight + 'px';
}

