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
