export interface ScoredShow {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Previousepisode;
  previousepisode: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel: null;
  image: Image;
  summary: string;
  _links: Links;
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: Type;
  airdate: string;
  airtime: Airtime;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  _links: Links;
}
//TODO: CHECK IF NECCESSARY
export enum Airtime {
  The2200 = '22:00',
}

//TODO: CHECK IF NECCESSARY
export enum Type {
  Regular = 'regular',
}
