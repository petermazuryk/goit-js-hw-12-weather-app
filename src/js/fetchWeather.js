const fetchWeather = query => {
  const options = {
    baseUrl: 'https://api.apixu.com/v1/current.json',
    apiKey: '768d2ccc74cd461e8ba105617191507',
  };

  const requestParams = `?key=${options.apiKey}&q=${query}`;

  return fetch(options.baseUrl + requestParams).then(responce =>
    responce.json(),
  );
};

export default fetchWeather;
