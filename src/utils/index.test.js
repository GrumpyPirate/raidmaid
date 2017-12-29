import { getPokemonById } from './index.js';

const expectedPokemon = {
  "ename": "Bulbasaur",
  "id": "001",
  "type": ["grass", "poison"]
};

// Test suite
describe('getPokemonById(id)', () => {
  // Get pokemon by number (string)
  it('should return a valid pokemon, when given a string ID', () => {
    const pokemon = getPokemonById('001'); // Bulbasaur
    expect(pokemon).toMatchObject(expectedPokemon);
  });

  // Get pokemon by number (int)
  it('should return a valid pokemon, when given a number', () => {
    const pokemon = getPokemonById(1); // Bulbasaur
    expect(pokemon).toMatchObject(expectedPokemon);
  });
});
