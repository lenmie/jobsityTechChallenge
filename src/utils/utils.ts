import { Show } from '../models/show.interface';

export const getShowSubtititle = (item: Show) =>
  `${item.premiered.slice(0, 4)} - ${item.status}\n${item.genres
    .slice(0, 2)
    .join(', ')}\n${item.network?.country.name}`;

export function cleanTextFromTags(text: string) {
  const regex = /(<p>|<\/p>|<b>|<\/b>)/g;

  return text.replaceAll(regex, '');
}
