import { Episode, Season } from '../models/show.interface';

const API_URL = 'https://api.tvmaze.com';

export async function getShows(page = 1) {
  try {
    const response = await fetch(`${API_URL}/shows?page=${page}`);

    if (response.status >= 400) throw new Error('error');

    const data = await response.json();

    return data;
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
