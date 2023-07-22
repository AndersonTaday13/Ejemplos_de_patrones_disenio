/*
AUtor: Anderson Taday.

Adapter para Conversión de Unidades

Supongamos que tienes una función que realiza conversiones de temperatura en grados Celsius, pero necesitas adaptarla para que también pueda convertir a grados Fahrenheit. Aquí tienes un ejemplo:

*/

// Función original para convertir Celsius a Fahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Adapter para convertir Fahrenheit a Celsius
function convertirFahrenheitACelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Uso del Adapter
const temperaturaCelsius = 25;
const temperaturaFahrenheit = 77;

console.log("Temperatura en Celsius:", temperaturaCelsius);
console.log("Temperatura en Fahrenheit:", temperaturaFahrenheit);

// Utilizando la función original
const resultadoFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
console.log("Temperatura en Fahrenheit (convertida):", resultadoFahrenheit);

// Utilizando el Adapter para convertir de Fahrenheit a Celsius
const resultadoCelsius = convertirFahrenheitACelsius(temperaturaFahrenheit);
console.log("Temperatura en Celsius (convertida):", resultadoCelsius);
