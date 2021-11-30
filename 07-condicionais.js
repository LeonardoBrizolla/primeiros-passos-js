console.log('Condicionais');

const idadeComprador = 18;
const estaAcompanhada = true;
const listaDeCidades = new Array(
  `Santa Catarina`,
  `Rio Grande do Sul`,
  `Curitiba`
);

console.log('Lista de cidades disponíveis');
console.log(listaDeCidades);

if (idadeComprador >= 18) {
  listaDeCidades.splice(1, 1);
  console.log(
    'Comprador maior de idade. Passagem comprada, obrigado pela preferencia :-)'
  );
} else if (estaAcompanhada) {
  console.log('Esta acompanhada');
  listaDeCidades.splice(1, 1);
} else {
  console.log('Comprador deve ser maior de idade');
}

console.log(listaDeCidades);
