export interface HttpClient {
  getAll<T>(url: string, options?: RequestInit): Promise<T>;
  getOne<T>(url: string, id: string, options: RequestInit): Promise<T>;
  deleteOne<T>(url: string, id: string, options: RequestInit): Promise<T>;
  updateOne<T>(url: string, id: string, options: RequestInit): Promise<T>;
  create<T>(url: string, data: object, options: RequestInit): Promise<T>;
}

export class HttpClientAdapter implements HttpClient {
  private readonly baseUrl = "http://localhost:3000/";

  concatUrl = (collection: string) => this.baseUrl.concat(collection);

  getAll = <T>(url: string, options: RequestInit = {}): Promise<T> =>
    new Promise((resolve, reject) =>
      fetch(this.concatUrl(url), { ...options })
        .then((res) => resolve(res.json()))
        .catch((e) => reject(e))
    );

  getOne = <T>(
    url: string,
    id: string,
    options: RequestInit = {}
  ): Promise<T> =>
    new Promise((resolve, reject) =>
      fetch(`${url}/${id}`, { ...options })
        .then((res) => resolve(res.json()))
        .catch((e) => reject(e))
    );

  deleteOne = <T>(
    url: string,
    id: string,
    options: RequestInit = {}
  ): Promise<T> =>
    new Promise((resolve, reject) =>
      fetch(`${url}/${id}`, { ...options, method: "POST" })
        .then((res) => resolve(res.json()))
        .catch((e) => reject(e))
    );

  updateOne = <T>(
    url: string,
    id: string,
    options: RequestInit = {}
  ): Promise<T> =>
    new Promise((resolve, reject) =>
      fetch(`${url}/${id}`, { ...options, method: "PUT" })
        .then((res) => resolve(res.json()))
        .catch((e) => reject(e))
    );

  create = <T>(
    url: string,
    data: object,
    options: RequestInit = {}
  ): Promise<T> =>
    new Promise((resolve, reject) =>
      fetch(url, {
        ...options,
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => resolve(res.json()))
        .catch((e) => reject(e))
    );
}
