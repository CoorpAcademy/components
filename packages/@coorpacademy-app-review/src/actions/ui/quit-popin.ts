export const OPEN_POPIN = '@@ui/OPEN_POPIN';
export const CLOSE_POPIN = '@@ui/CLOSE_POPIN';

type quitPopinPayload = {
  showQuitPopin: boolean;
};

export type openQuitPopinAction = {
  type: typeof OPEN_POPIN;
  payload: quitPopinPayload;
};

export type closeQuitPopinAction = {
  type: typeof CLOSE_POPIN;
  payload: quitPopinPayload;
};

export const openQuitPopin = (payload: quitPopinPayload): openQuitPopinAction => ({
  type: OPEN_POPIN,
  payload
});

export const closeQuitPopin = (payload: quitPopinPayload): closeQuitPopinAction => ({
  type: CLOSE_POPIN,
  payload
});
