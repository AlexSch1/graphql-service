# graphql-service

#### Запуск
1. Склонировать  repository with microservices [here](https://github.com/rolling-scopes-school/node-graphql-service)
2. Настроить .env файлы, установить зависимости для сервисов, запустить все сервисы
3. Запустить приложение `npm run start:dev`


#### Created queries:
- artist
- artists
- genre
- genres
- track
- tracks
- band
- bands
- album
- albums
- jwt
- user
- favourites (available only for logged in user)

#### Created mutation:

- Artists
    - createArtist
    - deleteArtist
    - updateArtist
- Genres
    - createGenre
    - deleteGenre
    - updateGenre
- Bands
    - createBand
    - deleteBand
    - updateBand
- Tracks
    - createTrack
    - deleteTrack
    - updateTrack
- Albums
    - createAlbum
    - deleteAlbum
    - updateAlbum
- Users
    - register
- Favourites
    - addTrackToFavourites
    - addBandToFavourites
    - addArtistToFavourites
    - addGenreToFavourites

#### Created types:

```graphql
type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
}

```
```graphql
type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

```
```graphql
type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

```
```graphql
type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}
```
```graphql
type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}
```
```graphql
type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
}
```
```graphql
type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}
```

______
### Description
- The repository with - The  application contains a Readme.md file containing detailed instructions for installing, running and using - The  application
- The application code that worked with Users instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- The application code that worked with Tracks instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- The application code that worked with Albums instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- The application code that worked with Artists instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- The application code that worked with Favorites instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- The application code that worked with Genres instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- The application code that worked with Bands instance divided into modules according to to its purpose and Nest.js architecture conventions (work with request and response in controller, business logic in service, etc.)
- Every implemented query/mutation