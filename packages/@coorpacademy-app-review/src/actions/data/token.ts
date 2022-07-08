export const STORE_TOKEN = '@@data/token/STORE_TOKEN';

export type StoreToken = {
  type: typeof STORE_TOKEN;
  payload: string;
};

export const storeToken = (token: string): StoreToken => ({
  type: STORE_TOKEN,
  payload: token
});
