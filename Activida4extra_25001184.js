var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%
var propiedad_recargo = 0.35; // 35%
var salario_recargo = 0.05; // 5%

// Función para calcular la cotización
function calcularCotizacion() {
    while (true) {
        var recargo_total = 0;
        var recargo = 0;

        var nombre = prompt("Ingrese su nombre (o escriba 'Salir' para terminar)");
        if (nombre.toUpperCase() === "SALIR") break;

        var edad = prompt("¿Cuántos años tiene? Ingrese solo números:");
        var edad_numero = parseInt(edad);

        var casado = prompt("¿Está casado/a actualmente? (SI/NO)").toUpperCase();
        var edad_conyuge_numero = 0;
        if (casado === "SI") {
            var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
            edad_conyuge_numero = parseInt(edad_conyuge);
        }

        var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)").toUpperCase();
        var cantidad_hijos = 0;
        if (hijos === "SI") {
            cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene? Ingrese solo números:"));
        }

        var propiedades = parseInt(prompt("¿Cuántas propiedades posee? Ingrese solo números:"));
        var salario = parseFloat(prompt("¿Cuál es su salario mensual? Ingrese solo números:"));

        // 1. Recargo por la edad del asegurado
        if (edad_numero >= 18 && edad_numero < 25) {
            recargo = precio_base * edad_18;
        } else if (edad_numero >= 25 && edad_numero < 50) {
            recargo = precio_base * edad_25;
        } else if (edad_numero >= 50) {
            recargo = precio_base * edad_50;
        }
        recargo_total += recargo;

        // 2. Recargo por la edad del cónyuge
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
        recargo_total += precio_base * hijos_recargo * cantidad_hijos;

        // 4. Recargo por cantidad de propiedades
        recargo_total += precio_base * propiedad_recargo * propiedades;

        // 5. Recargo por salario del asegurado
        recargo_total += salario * salario_recargo;

        // Cálculo del precio final
        var precio_final = precio_base + recargo_total;

        // Resultado
        alert("Para el asegurado " + nombre);
        alert("El recargo total será de: Q" + recargo_total.toFixed(2));
        alert("El precio final será de: Q" + precio_final.toFixed(2));
    }
}

// Ejecutar la función
calcularCotizacion();
