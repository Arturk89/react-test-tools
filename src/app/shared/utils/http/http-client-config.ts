let instance: unknown;

export const initializeHttpClient = <T>(client: T) => (instance = client);

export const getHttpClient = <T>() => instance as T;
