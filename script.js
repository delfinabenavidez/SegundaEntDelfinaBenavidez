function ejecutarProceso(proceso) {
    let numero1, numero2;
  
    switch (proceso) {
      case 'suma':
        numero1 = prompt("Introduce el primer número:");
        numero2 = prompt("Introduce el segundo número:");
  
        if (!isNaN(numero1) && !isNaN(numero2)) {
          let resultado = parseInt(numero1) + parseInt(numero2);
          document.querySelector("#resultadoSuma").textContent = "Resultado de la suma: " + resultado;
        } else {
          alert("Las entradas no son válidas.");
        }
        break;
  
      case 'resta':
        numero1 = prompt("Introduce el primer número:");
        numero2 = prompt("Introduce el segundo número:");
  
        if (!isNaN(numero1) && !isNaN(numero2)) {
          let resultado = parseInt(numero1) - parseInt(numero2);
          document.querySelector("#resultadoResta").textContent = "Resultado de la resta: " + resultado;
        } else {
          alert("Las entradas no son válidas.");
        }
        break;
  
      case 'concatenacion':
        numero1 = prompt("Introduce el primer texto:");
        numero2 = prompt("Introduce el segundo texto:");
  
        if (numero1 && numero2) {
          let resultado = numero1 + " " + numero2;
          document.querySelector("#resultadoConcatenacion").textContent = "Resultado de la concatenación: " + resultado;
        } else {
          alert("Las entradas no son válidas.");
        }
        break;
  
      case 'division':
        numero1 = prompt("Introduce el dividendo:");
        numero2 = prompt("Introduce el divisor:");
  
        if (!isNaN(numero1) && !isNaN(numero2) && numero2 != 0) {
          let resultado = parseInt(numero1) / parseInt(numero2);
          document.querySelector("#resultadoDivision").textContent = "Resultado de la división: " + resultado;
        } else {
          alert("Las entradas no son válidas.");
        }
        break;
  
      default:
        alert("Proceso no reconocido.");
    }
  }
  
  function init() {
    // Inicialización
    proceso = "";
  }
  