import { trackResolvers } from './track/resolvers';
import { userResolvers } from "./user/resolvers";
import { genreResolvers } from "./genre/resolvers";
import { artistResolvers } from "./artist/resolvers";
import { albumResolvers } from "./album/resolvers";
import { bandResolvers } from "./band/resolvers";
import { favouritesResolvers } from "./favourites/resolvers";

export default [
  trackResolvers,
  albumResolvers,
  favouritesResolvers,
  bandResolvers,
  artistResolvers,
  genreResolvers,
  userResolvers
];
