import { initializeHttpClient, getHttpClient } from "./http-client-config";
import { HttpClientAdapter, HttpClient } from "../../../fetch.config";

export const initHttpClient = () => {
  initializeHttpClient(new HttpClientAdapter());
};

export const httpClient = () => getHttpClient<HttpClient>();
