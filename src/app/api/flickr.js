import { fetchData } from '../common/helpers';

const API_KEY = process.env.FLICKR_KEY;

const URLS = {
  BASE: 'https://www.flickr.com/services/rest/',
  SEARCH: '?method=flickr.photos.search',
  KEY: `&api_key=${API_KEY}`,
  CONFIG: '&extras=url_l&format=json&nojsoncallback=1',
};

const API_URL_REQUEST = `${URLS.BASE}${URLS.SEARCH}${URLS.KEY}${URLS.CONFIG}`;

const fetchImage = async (...query) => {
  const imageQuery = `&tags=${encodeURIComponent(`weather,nature,${query.join()}`)}`;
  const imageSrc = await fetchData(`${API_URL_REQUEST}${imageQuery}`);
  return imageSrc.photos.photo[0].url_l;
};

const changeBg = async (season, daytime, placeName) => {
  const imageSrc = await fetchImage(season, daytime, placeName);
  document.body.style.backgroundImage = `url(${imageSrc})`;
};

export default changeBg;
