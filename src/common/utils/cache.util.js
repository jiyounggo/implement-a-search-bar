export const openCache = name => caches.open(name);

export const putCache = (cache, url) => response => {
  cache.put(url, response);
  return response;
};

export const matchCache = (cache, url) => cache.match(url);
