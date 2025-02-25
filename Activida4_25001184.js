var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

// Recargo
var recargo = 0;
var recargo_total = 0;

// Precio final 
var precio_final = 0;

// Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números ");
var casado = prompt("¿Está casado actualmente? (SI/NO)").toUpperCase();

// Comprobamos la edad del cónyuge solo si está casado/a
var edad_conyuge = 0;
if (casado === "SI") {
  edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
}

// Convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad);
var edad_conyuge_numero = casado === "SI" ? parseInt(edad_conyuge) : 0;

var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)").toUpperCase();
var cantidad_hijos = 0;

// Si tiene hijos, pedimos la cantidad
if (hijos === "SI") {
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene? Ingrese solo números "));
}

// 1. Recargo por la edad del asegurado
if (edad_numero >= 18 && edad_numero < 25) {
  recargo = precio_base * edad_18;
} else if (edad_numero >= 25 && edad_numero < 50) {
  recargo = precio_base * edad_25;
} else if (edad_numero >= 50) {
  recargo = precio_base * edad_50;
}
recargo_total += recargo;

// 2. Recargo por la edad del cónyuge (si aplica)
if (casado === "SI") {
  if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
    recargo = precio_base * casado_18;
  } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
    recargo = precio_base * casado_25;
  } else if (edad_conyuge_numero >= 50) {
    recargo = precio_base * casado_50;
  }
  recargo_total += recargo;
}

// 3. Recargo por cantidad de hijos
if (hijos === "SI" && cantidad_hijos > 0) {
  recargo_total += precio_base * hijos_recargo * cantidad_hijos;
}

// Cálculo del precio final
precio_final = precio_base + recargo_total;

// Resultado
alert("Para el asegurado " + nombre);
alert("El recargo total será de: Q" + recargo_total);
alert("El precio final será de: Q" + precio_final);
