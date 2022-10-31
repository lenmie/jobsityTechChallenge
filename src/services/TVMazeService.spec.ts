import { TVMazeService } from '../services/TVMazeService';
import mockShows from '../utils/mockShows.json';
import mockSearch from '../utils/mockSearch.json';
import mockShowSeasons from '../utils/mockShowSeasons.json';
import mockShowEpisodes from '../utils/mockShowEpisodes.json';

//api results are mocked
describe('TV Maze Service', () => {
  it('should return a page with empty shows', async () => {
    jest.spyOn(TVMazeService, 'getShows').mockResolvedValue([]);
    const response = await TVMazeService.getShows();
    expect(response).toEqual([]);
  });

  it('should return a first page with shows', async () => {
    jest
      .spyOn(TVMazeService, 'getShows')
      .mockResolvedValue([mockShows[0], mockShows[1]]);
    const response = await TVMazeService.getShows();
    expect(response).toEqual([mockShows[0], mockShows[1]]);
  });

  it('should return results with query on its name', async () => {
    const query = 'ca';
    jest.spyOn(TVMazeService, 'searchShows').mockResolvedValue(mockSearch);
    const response = await TVMazeService.searchShows(query);
    response.forEach(searchResult => {
      expect(searchResult.show.name.toLowerCase().includes(query)).toBeTruthy();
    });
  });

  it('should return a show seasons', async () => {
    jest
      .spyOn(TVMazeService, 'getShowSeasons')
      .mockResolvedValue(mockShowSeasons);
    const response = await TVMazeService.getShowSeasons();
    expect(response).toEqual(mockShowSeasons);
  });

  it('should return a shows season episodes', async () => {
    jest
      .spyOn(TVMazeService, 'getSeasonEpisodes')
      .mockResolvedValue(mockShowEpisodes);
    const response = await TVMazeService.getSeasonEpisodes();
    expect(response).toEqual(mockShowEpisodes);
  });
});
