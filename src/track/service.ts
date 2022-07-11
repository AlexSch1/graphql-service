import ApiBridge from '../core/api-bridge';
import { Track } from '../core/interfaces';
import config from '../core/config';

class TrackService extends ApiBridge<Track> {
  constructor() {
    super(config.TRACKS_URL);
  }
}

export default new TrackService();
