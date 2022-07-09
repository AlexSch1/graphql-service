import config from '../core/config';
import ApiBridge from "../core/api-bridge";
import { Album } from "../core/interfaces";

class AlbumService extends ApiBridge<Album>{
  constructor() {
    super(config.ALBUMS_URL)
  }

}

export default new AlbumService();
