import checkResponse from './checkResponse';
import type { OptionType } from '../types';

function request(option: OptionType) {
  return fetch(`https://api.nomoreparties.co/beatfilm-movies`, option).then(checkResponse);
}

export const getAllMovies = () => {
  return request({
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
}
