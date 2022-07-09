import config from '../core/config';
import ApiBridge from "../core/api-bridge";
import { User } from "../core/interfaces";

class GenreService extends ApiBridge<User>{
  constructor() {
    super(config.GENRES_URL)
  }

}

export default new GenreService();
