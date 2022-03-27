let limite;
let multiplo;
do {
   limite = parseInt(prompt("¿Hasta qué número quieres contar?"))
} while (isNaN(limite));
do {
    multiplo = parseInt(prompt("Ingresa el multiplo que quieres evitar"))
} while (isNaN(multiplo));

for (let i = 1; i < limite; i++) {
    if (i % multiplo == 0) {
        continue
    }    
    console.log(i);
};

alert("Mira la consola");