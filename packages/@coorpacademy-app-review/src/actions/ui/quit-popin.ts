export const OPEN_POPIN = '@@ui/OPEN_POPIN' as const;
export const CLOSE_POPIN = '@@ui/CLOSE_POPIN' as const;

export const openQuitPopin = {
  type: OPEN_POPIN
};

export const closeQuitPopin = {
  type: CLOSE_POPIN, 
};