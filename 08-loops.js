console.log('\n Iterando sobre colecoes');

const listaDeCidades = new Array(
  `Santa Catarina`,
  `Rio Grande do Sul`,
  `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhado = true;
const destino = 'Rio Grande do Sul';
let temPassagemComprada = false;

console.log('\n Destinos possiveis:');
console.log(listaDeCidades);

const podeComprar = idadeComprador >= 18 || estaAcompanhado === true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeCidades.length) {
  if (listaDeCidades[contador] === destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log('Destino existe: ', destinoExiste);

if (podeComprar && destinoExiste) {
  console.log('Boa viagem!');
} else {
  console.log('Erro no sistema!');
}

// For

// for (i = 0; i < listaDeCidades.length; i++) {
//   if (listaDeCidades[i] === destino) {
//     console.log('Achou a city ;)');
//   }
// }
