let instance: unknown;

export const initializeHttpClient = <T>(client: T) => (instance = client);

export const getHttpClient = () => instance;

export const useHttpClient = () => getHttpClient();
