import { raids } from '../data/raids';
import { getPokemonById } from '../utils'

class RaidService {
  getRaids () {
    const raidsWithDetails = raids.map(raid => {
      const pokemon = getPokemonById(raid.pokemonId);

      return {
        id: raid.id,
        pokemon,
        hatchesAt: raid.hatchesAt,
        meetupAt: raid.meetupAt,
        locationId: raid.locationId
      };
    });

    return Promise.resolve(raidsWithDetails);
  } // /getRaids
} // /class RaidService

export default RaidService;
