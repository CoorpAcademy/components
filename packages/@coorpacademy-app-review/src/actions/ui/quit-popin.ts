export const OPEN_POPIN = '@@ui/OPEN_POPIN';
export const CLOSE_POPIN = '@@ui/CLOSE_POPIN';

type QuitPopinPayload = {
  showQuitPopin: boolean;
};

export type QuitPopinAction = {
  type: typeof CLOSE_POPIN | typeof OPEN_POPIN;
  payload: QuitPopinPayload;
};

export const openQuitPopin = (): QuitPopinAction => ({
  type: OPEN_POPIN,
  payload: {
    showQuitPopin: true
  }
});

export const closeQuitPopin = (): QuitPopinAction => ({
  type: CLOSE_POPIN,
  payload: {
    showQuitPopin: false
  }
});
