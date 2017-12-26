import { raids } from '../data/raids';

class RaidService {
  getRaids () {
    return Promise.resolve(raids);
  } // /getRaids
}

export default RaidService;
