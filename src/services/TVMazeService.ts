import { Episode, ScoredShow, Season, Show } from '../models/show.interface';

const API_URL = 'https://api.tvmaze.com';

export async function getShows(page = 1): Promise<Show[]> {
  try {
    const response = await fetch(`${API_URL}/shows?page=${page}`);

    if (response.status >= 400) throw new Error('error');

    const data = await response.json();

    const shuffledData = data.sort(() => 0.5 - Math.random());

    return shuffledData;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getShowSeasons(showId: number): Promise<Season[]> {
  try {
    const response = await fetch(`${API_URL}/shows/${showId}/seasons`);

    if (response.status >= 400) throw new Error('error');

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getSeasonEpisodes(seasonId: number): Promise<Episode[]> {
  try {
    const response = await fetch(`${API_URL}/seasons/${seasonId}/episodes`);

    if (response.status >= 400) throw new Error('error');

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function searchShows(query: string): Promise<ScoredShow[]> {
  try {
    const response = await fetch(`${API_URL}/search/shows?q=${query}`);

    if (response.status >= 400) throw new Error('error');

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return [];
  }
}
