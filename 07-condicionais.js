console.log('Condicionais');

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;
const listaDeCidades = new Array(
  `Santa Catarina`,
  `Rio Grande do Sul`,
  `Curitiba`,
  `São Paulo`
);

console.log('Lista de cidades disponíveis');
console.log(listaDeCidades);

if (idadeComprador >= 18 || estaAcompanhada) {
  listaDeCidades.splice(1, 1);
  console.log('Passagem comprada, obrigado pela preferencia :-)');
} else {
  console.log('Comprador deve ser maior de idade');
}

console.log('Embarque: \n');

if (idadeComprador >= 18 && temPassagemComprada) {
  console.log('Boa viagem!');
} else {
  console.log('Você não pode embarcar :-(');
}

console.log(listaDeCidades);
