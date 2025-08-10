const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función recursiva para verificar si un número es primo
function esPrimo(num, divisor = 2) {
    if (num <= 1) return false;
    if (divisor * divisor > num) return true;
    if (num % divisor === 0) return false;
    return esPrimo(num, divisor + 1);
}

function preguntar(mensaje) {
    return new Promise((resolve) => {
        rl.question(mensaje, (respuesta) => {
            resolve(parseInt(respuesta));
        });
    });
}

async function main() {
    try {
        let num = await preguntar("Introduce un número para verificar si es primo: ");
        console.log(`${num} ${esPrimo(num) ? "es primo" : "no es primo"}`);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        rl.close();
    }
}

main();
