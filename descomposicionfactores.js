import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function factoresPrimos(numero, divisor = 2) {
    if (numero === 1) return []; 
    if (numero % divisor === 0) {
        return [divisor, ...factoresPrimos(numero / divisor, divisor)];
    } else {
        return factoresPrimos(numero, divisor + 1);
    }
}

function leerNumero() {
    return new Promise((resolve, reject) => {
        rl.question("Ingresar un numero mayor que 1: ", (input) => {
            const num = parseInt(input);
            if (isNaN(num) || num <= 1) {
                reject("Ingrese un numero entero mayor que 1.");
            } else {
                resolve(num);
            }
        });
    });
}

async function main() {
    try {
        const numero = await leerNumero();
        const factores = factoresPrimos(numero);
        console.log(`${numero} = ${factores.join(" × ")}`);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        rl.close();
    }
}

main();
