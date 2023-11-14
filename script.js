//alert("Hola este es mi Javascript");

//let nombre = "Camilo";
//   nombre = "Juan";

//var nombre1 = "Camilo";

//const nombre2 = "Camilo";
   //nombre2 = "Juan";


//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".logo .fuente-acento")
// console.log(titulo);

//titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if(textoTitulo == "Nombre"){
//    titulo.innerHTML = "Otro";
//} else {
//    console.log("No se cumple");
//}

//FUNCIONES
//let nombre = "Ani";
//let ciudad = "Bs As";
//let gusto = "chocolate";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto) {
//    let contenido = `Me llamo ${nombre}, naci en ${ciudad} y vivo en Caballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`;

//    return contenido;
//}

//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);


const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});