function procesarDatos() {
    let nombre = prompt("Ingresa tu nombre:");
    let mensaje = "Hola " + nombre + ", gracias por venir a la Gran Fiesta.";
    alert(mensaje);
}

function verificarEdad() {
    var edad = parseInt(document.getElementById("edad").value);
    if (isNaN(edad)) {
        document.getElementById("mensaje-edad").innerHTML = "Por favor, ingresa un número válido.";
    } else {
        if (edad >= 18) {
            document.getElementById("mensaje-edad").innerHTML = "Eres mayor de 18 años y puedes realizar la compra.";
        } else {
            document.getElementById("mensaje-edad").innerHTML = "Lo siento, debes ser mayor de 18 años para realizar la compra.";
        }
    }
}

let bebidas = [
    { nombre: "coca", cantidadPorPersona: 2 },
    { nombre: "fernet", cantidadPorPersona: 2 },
    { nombre: "vino", cantidadPorPersona: 1 }
  ];

  let calculadoraBebidas = {
    calcularCantidadTotal: function(invitados) {
      let resultado = {};
      bebidas.forEach(bebida => {
        resultado[bebida.nombre] = bebida.cantidadPorPersona * invitados;
      });
      return resultado;
    },
  
    imprimirCantidadTotal: function(invitados) {
      let cantidadTotal = this.calcularCantidadTotal(invitados);
      let resultado = "";
      for (const [bebida, cantidad] of Object.entries(cantidadTotal)) {
        resultado += `Se necesitan ${cantidad} ${bebida}(s).<br>`;
      }
      document.getElementById("resultado").innerHTML = resultado;
    }
  };
  
  function calcularBebidas() {
    let invitados = document.getElementById("invitados").value;
    calculadoraBebidas.imprimirCantidadTotal(invitados);
  }

function agregarInvitados() {
    let invitados = [];
    while (true) {
        let nombre = prompt("Ingresa el nombre del invitado o escribe 'listo' para terminar:");
        if (nombre.toLowerCase() === "listo") {
            break;
        } else {
            invitados.push(nombre);
        }
    }
    alert("Los invitados son: " + invitados.join(", "));
}
function guardarDatos(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const mensaje = document.getElementById('mensaje').value;
  
    const datos = { nombre, email, telefono, mensaje };
  
    localStorage.setItem('formularioDatos', JSON.stringify(datos));
    console.log('Datos guardados en Local Storage:', datos);
  }
  function agregarAlCarrito() {
	const entradas = parseInt(document.getElementById("entradas").value);
	localStorage.getItem("carrito") ? localStorage.setItem("carrito", parseInt(localStorage.getItem("carrito")) + entradas) : localStorage.setItem("carrito", entradas);
}
function finalizarCompra() {
	const cantidad = localStorage.getItem("carrito");
	const mensaje = {
		titulo: "¡Ya tienes tu entrada para la Gran Fiesta!",
		texto: `Has comprado ${cantidad} entradas para la fiesta más grande del año. ¡Nos vemos allí!`
	};
	const mensajeJSON = JSON.stringify(mensaje);
	const mensajeHTML = `<div class="mensaje"><h2>${mensaje.titulo}</h2><p>${mensaje.texto}</p></div>`;
	document.body.insertAdjacentHTML("beforeend", mensajeHTML);
	localStorage.removeItem("carrito");
}