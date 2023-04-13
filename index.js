(() => {

// Constantes 
  
const $btnEncriptado = document.getElementById('btn-encriptar'),
  $btnDesncriptado = document.getElementById('btn-desencriptar'),
  $btnCopiar = document.getElementById('btn-copiar'),
  $textArea = document.getElementById('texto')
  $asideDivs = document.querySelectorAll('aside div');
  
const codigo = { 
    "e" : "enter",
    "i" : "imes", 
    "a" : "ai",  
    "o" : "ober", 
    "u" : "ufat"
  };

const mayusculas = new RegExp('[A-Z]');
const caracteresEspeciales = new RegExp('[À-ÿ]')
  
$textArea.value = '';

// EVENTOS 

  $btnEncriptado.addEventListener( 'click', e => {
    if(!chequearTexto($textArea.value)){
      $asideDivs[1].querySelector('p').innerHTML = encriptar($textArea.value);
      $textArea.value = '';
      $asideDivs[0].classList.add('none');
      $asideDivs[1].classList.remove('none');
    }
  })

  $btnDesncriptado.addEventListener( 'click', e => {
    if(!chequearTexto($textArea.value)){
      $asideDivs[1].querySelector('p').innerHTML = desencriptar($textArea.value);
      $textArea.value = '';
      $asideDivs[0].classList.add('none');
      $asideDivs[1].classList.remove('none');
    }
  })

  $btnCopiar.addEventListener( 'click' , e => {
    const text = $asideDivs[1].querySelector('p').innerHTML;
    $textArea.value = text;
    $asideDivs[1].querySelector('p').innerHTML = '';
    $asideDivs[1].classList.add('none');
    $asideDivs[0].classList.remove('none');
  })

// FUNCIONES

  function encriptar(texto) {
    let encriptado = '';
    for (let i = 0; i < texto.length; i++) {
      const letra = texto.charAt(i);
      encriptado += codigo[letra] ? codigo[letra] : letra;
    }
    return encriptado;
  }

  function desencriptar(texto) {
    let desencriptado='';
    
    for (const letra in codigo) {
      desencriptado = texto.replace(codigo[letra], letra);
      texto = desencriptado;
    }
    for (const letra in codigo) {
      if(desencriptado.includes(codigo[letra])) desencriptado = desencriptar(desencriptado);
    }
    return desencriptado;
  }

  function chequearTexto(texto) {
    if(texto.match(mayusculas) ) {
      // alert("El texto tiene mayuscula, solo acepta minusculas. Modifique su texto");
      $textArea.classList.add('error');
      setTimeout(() => $textArea.classList.remove('error') ,300);
      return true;
    }
    if(texto.match(caracteresEspeciales)){
      // alert("El texto tiene carácteres especiales. Modifique su texto")
      $textArea.classList.add('error');
      setTimeout(() => $textArea.classList.remove('error') ,300);
      return true;
    }
    return false;
  }

})()

