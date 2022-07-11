import config from '../core/config';
import ApiBridge from "../core/api-bridge";
import { Band } from "../core/interfaces";

class BandService extends ApiBridge<Band>{
  constructor() {
    super(config.BANDS_URL)
  }

}

export default new BandService();
