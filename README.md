# Cotizador de Seguros

## Descripción
Este programa permite calcular el costo de un seguro basándose en la edad del asegurado, estado civil, cantidad de hijos, cantidad de propiedades y salario. Se pueden hacer múltiples cotizaciones hasta que el usuario escriba "Salir".

## Funcionamiento
1. Solicita al usuario su nombre y edad.
2. Pregunta si está casado/a y, en caso afirmativo, solicita la edad del cónyuge.
3. Pregunta si tiene hijos y, en caso afirmativo, solicita la cantidad.
4. Solicita la cantidad de propiedades del usuario.
5. Solicita su salario mensual.
6. Calcula los recargos de la siguiente manera:
   - Edad del asegurado: 
     - 18-24 años → 10% de recargo
     - 25-49 años → 20% de recargo
     - 50+ años → 30% de recargo
   - Edad del cónyuge (si aplica) con la misma tabla de recargos.
   - Cantidad de hijos → 20% por cada hijo.
   - Propiedades → 35% de recargo por cada propiedad.
   - Salario → 5% de recargo sobre el salario mensual.
7. Muestra el recargo total y el precio final del seguro.
8. Permite hacer múltiples cotizaciones hasta que el usuario escriba "Salir".

## Algoritmo
1. Iniciar un ciclo hasta que el usuario escriba "Salir".
2. Solicitar los datos necesarios al usuario.
3. Convertir las entradas a números donde sea necesario.
4. Calcular los recargos según las reglas mencionadas.
5. Sumar todos los recargos al precio base.
6. Mostrar el resultado al usuario.
7. Repetir el proceso si el usuario no ha escrito "Salir".

## Mejoras futuras
- Implementar una interfaz gráfica para hacer la experiencia más intuitiva.
- Permitir la opción de guardar las cotizaciones en un archivo para su revisión posterior.
- Integrar con una base de datos para gestionar clientes de forma más eficiente.
