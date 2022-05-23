export const STORE_TOKEN = '@@token/STORE_TOKEN';

export type $STORE_TOKEN = {
  type: '@@token/STORE_TOKEN';
  payload: string;
};

export const storeToken = (token: string): $STORE_TOKEN => ({
  type: STORE_TOKEN,
  payload: token
});
