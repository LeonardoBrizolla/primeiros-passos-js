console.log('Trabalhando com listas - Vetores | Arrays');

const listaDeCidades = new Array(
  `Santa Catarina`,
  `Rio Grande do Sul`,
  `Curitiba`
);

listaDeCidades.push(`São Paulo`);
listaDeCidades.splice(2, 1);

console.log(listaDeCidades);
console.log(listaDeCidades[0], listaDeCidades[1]);
