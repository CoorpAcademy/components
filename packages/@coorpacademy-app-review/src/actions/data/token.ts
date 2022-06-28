export const STORE_TOKEN = '@@token/STORE_TOKEN';

export type StoreToken = {
  type: '@@token/STORE_TOKEN';
  payload: string;
};

export const storeToken = (token: string): StoreToken => ({
  type: STORE_TOKEN,
  payload: token
});
