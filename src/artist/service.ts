import config from '../core/config';
import ApiBridge from "../core/api-bridge";
import { Album } from "../core/interfaces";

class ArtistsService extends ApiBridge<Album>{
  constructor() {
    super(config.ARTISTS_URL)
  }

}

export default new ArtistsService();
