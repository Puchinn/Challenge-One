const textEnc = document.getElementById('textEnc')
const textDes = document.getElementById('textDes')
const btnEnc = document.getElementById('encriptar')
const btnDes = document.getElementById('desencriptar')
const salida = document.getElementById('salida')
const btnCop = document.getElementById('copiar')
const noti = document.querySelector('.noti')

const llaves = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

const regexLetras = new RegExp('[' + Object.keys(llaves).join('') + ']', 'g')
const regexPalabras = new RegExp('\(' + Object.values(llaves).join('|') + '\)', 'g')

function obtenerTexto(string) {
    const texto = string === 'encriptar' ? textEnc.value : textDes.value
    const regexText = /^[a-z\s0-9]+$/
    return regexText.test(texto) ? texto : false
}

function animar() {
    if (noti.classList.contains('animar')) {
        return
    } else if (noti.classList.contains('exitNoti')) {
        return
    }
    noti.style.display = 'flex'
    noti.classList.add('animar')
    setTimeout(() => {
        noti.classList.remove('animar')
        noti.classList.add('exitNoti')
        setTimeout(() => {
            noti.classList.remove('exitNoti')
            noti.style.display = 'none'
        }, 200)
    }, 3000)
}

function encriptar() {
    const text = obtenerTexto('encriptar')
    if (!text) {
        noti.innerHTML = '<h1>Advertencia: texto invalido</h1>'
        animar()
        return
    }
    const newText = text.replaceAll(regexLetras, (coincidencia) => {
        return llaves[coincidencia]
    })
    noti.innerHTML = '<h1>Encriptado exitoso!</h1>'
    animar()
    salida.innerHTML = newText
}

function desencriptar() {
    const text = obtenerTexto('desencriptar')
    if (!text) {
        noti.innerHTML = '<h1>Advertencia: texto invalido</h1>'
        animar()
        return
    }
    const newText = text.replaceAll(regexPalabras, (palabra) => {
        return Object.keys(llaves).find(llave => llaves[llave] === palabra)
    })
    noti.innerHTML = '<h1>Desencriptado exitoso!</h1>'
    animar()
    salida.innerHTML = newText
}

function copiar() {
    noti.innerHTML = '<h1>Texto copiado!</h1>'
    animar()
    const text = salida.textContent
    navigator.clipboard.writeText(text)
}

btnEnc.addEventListener('click', encriptar)
btnDes.addEventListener('click', desencriptar)
btnCop.addEventListener('click', copiar)
