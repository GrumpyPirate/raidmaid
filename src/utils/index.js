import pokemonData from '../data/pokemon';

function getPokemonById (id) {
  return pokemonData.find(pokemon => {
    switch (typeof id) {
      case 'string':
        return pokemon.id === id;
      case 'number':
      default:
        const idNumber = parseInt(pokemon.id, 10);
        return idNumber === id;
    }
  });
} // /getPokemonById ()

export {
  getPokemonById
};
