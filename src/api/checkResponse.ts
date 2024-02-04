type ResponseType = {
  ok?: boolean;
  status?: number;
  json: Function;
}

export default function checkResponse(res: ResponseType) {
	if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}
