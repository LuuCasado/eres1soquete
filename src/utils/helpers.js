export const buildQueryString = params =>
  Object.keys(params)
    .filter(param => params[param])
    .map(param => `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`)
    .join('&');

export const buildQueryUrl = (url, query) => `${url}?${buildQueryString(query)}`;