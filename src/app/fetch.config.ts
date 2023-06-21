export class HttpClientAdapter {
  getAll = (url: string, options: RequestInit = {}) =>
    fetch(url, { ...options })
      .then((res) => res.json())
      .catch((e) => e);

  getOne = (url: string, id: string, options: RequestInit = {}) =>
    fetch(`${url}/${id}`, { ...options })
      .then((res) => res.json())
      .catch((e) => e);

  deleteOne = (url: string, id: string, options: RequestInit = {}) =>
    fetch(`${url}/${id}`, { ...options, method: "POST" }).then((res) =>
      res.json()
    );

  updateOne = (url: string, id: string, options: RequestInit = {}) =>
    fetch(`${url}/${id}`, { ...options, method: "PUT" }).then((res) =>
      res.json()
    );

  create = (url: string, data: object, options: RequestInit = {}) =>
    fetch(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
}
