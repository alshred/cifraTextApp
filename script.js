//AJUSTAR ALTURA CONTENEDOR DE TEXTO DE ENTRADA 

var textarea = document.querySelector(".text-box")

textarea.addEventListener("keyup", e => {
  textarea.style.height = "20px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});


// VALIDACIÓN DE ENTRADA DE TEXTO

var textar = document.querySelector("#container textarea"),
    condition = document.querySelector(".condition"),
    text = document.getElementById("text"),      
    encbtn = document.getElementById('encrypt'),   
    desencbtn = document.getElementById('desencrypt'),   
    regexp = /^[a-z ]+$/;

const validate = () => {  
  if (text.value === "") {
    textar.classList.remove("error");
    condition.classList.remove("condition-error");
    textar.classList.add("valid");
  } else if (regexp.test(text.value)) {
    textar.classList.remove("error");
    condition.classList.remove("condition-error");
    textar.classList.add("valid");
    encbtn.disabled = false;
    desencbtn.disabled = false;
  } else {
    textar.classList.remove("valid");
    condition.classList.add("condition-error");
    textar.classList.add("error");
    encbtn.disabled = true;
    desencbtn.disabled = true;
  };
};

textar.addEventListener("keyup", validate);
textar.addEventListener("blur", validate);


//ENCRIPTAR TEXTO

var input = "",
    arrAux = [],
    encrypt = "";

const encrypText = (text) => {
  for(let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      arrAux.push("ai");
      continue;
    } else if (text[i] === "e") {
      arrAux.push("enter");
      continue;
    } else if (text[i] === "i") {
      arrAux.push("imes");
      continue;
    } else if (text[i] === "o") {
      arrAux.push("ober");
      continue;
    } else if (text[i] === "u") {
      arrAux.push("ufat");
      continue;
    };
    arrAux.push(text[i]);
  };  
  encrypt = arrAux.toString();
  encrypt = encrypt.replaceAll(',','');
  return encrypt;
};


// CAPTURA DE MENSAJE Y EJECUCIÓN ENCRIPTADO

var textOut = document.getElementById("text-out"),
    copy = document.getElementById("copy"),
    img = document.getElementById("img");

const capturEnc = () => {
  input = text.value;
  encrypText(input);
  
  if (encrypt != "") {
    textOut.innerHTML = encrypt;
    copy.classList.remove('hide');
    img.classList.add('hide');
  };
};


//DESENCRIPTAR TEXTO

var  desencrypt = "";

const desencripText = (text) => {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
      desencrypt = desencrypt.replace("ai", "a");
    } else if (text[i] === "e") {    
      desencrypt = desencrypt.replace("enter", "e");
    } else if (text[i] === "i") {
      desencrypt = desencrypt.replace("imes", "i");
    } else if (text[i] === "o") {
      desencrypt = desencrypt.replace("ober", "o");    
    } else if (text[i] === "u") {
      desencrypt = desencrypt.replace("ufat", "u");    
    };    
  };
  return desencrypt;
};


// EJECUCIÓN DESENCRIPTADO

const desEnc = () => {  
  desencrypt = text.value;  
  desencripText(desencrypt);
  
  if (desencrypt != "") {
    textOut.innerHTML = desencrypt;
    copy.classList.remove('hide');
    img.classList.add('hide');
  };
};


// COPIAR MENSAJE PROCESADO

const copyText = (el) => {
  let imputaux = document.createElement('input');
  
  imputaux.setAttribute('value', el.innerText);
  imputaux.setAttribute('id', "prov");
  document.body.appendChild(imputaux);
  imputaux.select();
  navigator.clipboard.writeText(imputaux.value);
  document.getElementById("prov").remove();
};

copy.addEventListener('click', () => {
  copyText(textOut);
})


// LIMPIAR PANTALLA

textarea.addEventListener('click', () => {
  clearScr();
})

const clearScr = () => {
  encrypt = "";
  desencrypt = "";
  copy.classList.add('hide');
  img.classList.remove('hide');  

  text.value = "";
  textOut.innerHTML = `<strong>Ningún mensaje fue encontrado</strong>
  <br><br>
  <small>Ingresa el texto que deseas encriptar o desencriptar.</small>`;
}


//MODO NOCTURNO

var toggle = document.getElementById('toggle'),
      icon = document.getElementById('icon'),
      logo = document.getElementById('logo'),
      github = document.getElementById('github');
      linkedin = document.getElementById('linkedin');

toggle.addEventListener("change", (e) => {
  let checked = e.target.checked;
  document.body.classList.toggle("dark");
  console.log(e)

  if (checked) {
    icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
    logo.style.filter = "invert(100%)"
    encbtn.setAttribute("style", "border-color:#F3F5FC;");
    github.style.color = "#F3F5FC"
    linkedin.style.color = "#F3F5FC"
  } else {
    icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
    logo.style.filter = "invert(0%)"
    github.style.color = "#0A3871"
    linkedin.style.color = "#0A3871"
  };
});