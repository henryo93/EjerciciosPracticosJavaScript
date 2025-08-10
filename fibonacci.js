// Importar módulo para leer desde consola
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función recursiva de Fibonacci
function fibonacci(n) {
    if (n < 0) return "El número debe ser positivo";
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Función que lee desde consola usando promesa
function preguntar(mensaje) {
    return new Promise((resolve) => {
        rl.question(mensaje, (respuesta) => {
            resolve(parseInt(respuesta));
        });
    });
}

// Función principal con async/await
async function main() {
    try {
        let num = await preguntar("Introduce un número para calcular Fibonacci: ");
        console.log(`El Fibonacci de ${num} es: ${fibonacci(num)}`);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        rl.close();
    }
}

// Ejecutar
main();
