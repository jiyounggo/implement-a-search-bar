import { matchCache, openCache, putCache } from '../common/utils/cache.util';

const API_URL = `${process.env.REACT_APP_API_URL}`;

const fetchSearch = async params => {
  const CACHE_NAME = 'search';
  const URL = `${API_URL}/sick?${new URLSearchParams(params)}`;
  const callDate = Date.now();
  const call = () => {
    console.info('calling api');
    return fetch(URL, { method: 'GET' });
  };

  return await openCache(CACHE_NAME).then(cache => {
    return matchCache(cache, URL).then(response => {
      if (!response) return call().then(putCache(cache, URL));
      if (Date.now() > callDate + 1000 * 60 * 5) return call().then(putCache(cache, URL));

      return response;
    });
  });
};

export { fetchSearch };
