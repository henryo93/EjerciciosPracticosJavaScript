const readline = require('readline');

async function calcularFactorial() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numeroF = await new Promise(resolve =>
    rl.question('Por favor introduzca un numero entero mayor a 0: ', resolve)
  );
  rl.close();

  const n = Number(numeroF);
  if (!Number.isInteger(n) || n < 1) {
    console.error('Debe ser un entero mayor o igual a 1.');
    return;
  }

  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }

  console.log(`El factorial de ${n} es ${fact}`);
}

calcularFactorial()