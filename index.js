(() => {
  
const $btnEncriptado = document.getElementById('btn-encriptar'),
  $btnDesncriptado = document.getElementById('btn-desencriptar'),
  $btnCopiar = document.getElementById('btn-copiar'),
  $textArea = document.getElementById('texto')
  $asideDivs = document.querySelectorAll('aside div');


  $textArea.value = '';
  const codigo = { 
    "e" : "enter",
    "i" : "imes", 
    "a" : "ai",  
    "o" : "ober", 
    "u" : "ufat"
  };

  $btnEncriptado.addEventListener( 'click', e => {
    $asideDivs[1].querySelector('p').innerHTML = encriptar($textArea.value);
    $textArea.value = '';
    $asideDivs[0].classList.add('none');
    $asideDivs[1].classList.remove('none');
  })

  $btnDesncriptado.addEventListener( 'click', e => {
    $asideDivs[1].querySelector('p').innerHTML = desencriptar($textArea.value);
    $textArea.value = '';
    $asideDivs[0].classList.add('none');
    $asideDivs[1].classList.remove('none');
  })

  $btnCopiar.addEventListener( 'click' , e => {
    const text = $asideDivs[1].querySelector('p').innerHTML;
    $textArea.value = text;
    $asideDivs[1].querySelector('p').innerHTML = '';
    $asideDivs[1].classList.add('none');
    $asideDivs[0].classList.remove('none');
  })



  function encriptar(palabra) {
    let encriptado = '';
    for (let i = 0; i < palabra.length; i++) {
      const letra = palabra.charAt(i);
      encriptado += codigo[letra] ? codigo[letra] : letra;
    }
    return encriptado;
  }

  function desencriptar(palabra) {
    let desencriptado='';
    
    for (const letra in codigo) {
      desencriptado = palabra.replace(codigo[letra], letra);
      palabra = desencriptado;
    }
    for (const letra in codigo) {
      if(desencriptado.includes(codigo[letra])) desencriptado = desencriptar(desencriptado);
    }
    return desencriptado;
  }
})()

