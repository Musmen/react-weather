import { fetchData, getDayTime, getSeason } from '../common/helpers';

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
  const imagesResponseCount = imageSrc.photos.photo.length;
  const randomImageIndexFromResponse = Math.round(Math.random() * imagesResponseCount);
  return imageSrc.photos.photo[randomImageIndexFromResponse].url_l;
};

const changeBgImage = async (season, daytime, country, place) => {
  const imageSrc = await fetchImage(season, daytime, country, place);
  document.body.style.backgroundImage = `url(${imageSrc})`;
};

const changeBgImageByLocation = (timeZone, country, place) => {
  const season = getSeason(timeZone);
  const dayTime = getDayTime(timeZone);
  console.log(
    'season: ',
    season,
    ', dayTime: ',
    dayTime,
    ', country: ',
    country,
    ', place: ',
    place,
  );
  changeBgImage(season, dayTime, country, place);
};

export default changeBgImageByLocation;
