import checkResponse from './checkResponse';

type OptionType = {
  method: string;
  headers: {'Content-Type': string};
  body?: BodyInit | null | undefined;
}

function request(option: OptionType) {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`, option).then(checkResponse);
}

export const getAllMovies = () => {
  return request({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
}
