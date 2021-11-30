console.log('Condicionais');

const idadeComprador = 18;

const listaDeCidades = new Array(
  `Santa Catarina`,
  `Rio Grande do Sul`,
  `Curitiba`
);

console.log('Lista de cidades disponíveis');
console.log(listaDeCidades);

if (idadeComprador >= 18) {
  listaDeCidades.splice(1, 1);
  console.log('Passagem comprada, obrigado pela preferencia :-)');
} else {
  console.log('Comprador deve ser maior de idade');
}

console.log(listaDeCidades);
