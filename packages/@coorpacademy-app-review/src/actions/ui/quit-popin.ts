export const OPEN_POPIN = '@@ui/OPEN_POPIN' as const;

type openQuitPopinPayload = {
  showQuitPopin: boolean;
};

export type openQuitPopinAction = {
  type: typeof OPEN_POPIN;
  payload: openQuitPopinPayload;
};

export const openQuitPopin = (payload: openQuitPopinPayload): openQuitPopinAction => ({
  type: OPEN_POPIN,
  payload
});

export const closeQuitPopin = (payload: openQuitPopinPayload): openQuitPopinAction => ({
  type: OPEN_POPIN,
  payload
});
