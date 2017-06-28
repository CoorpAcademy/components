export const UI_TOGGLE_ACCORDION = '@@ui/TOGGLE_ACCORDION';
export const UI_SELECT_RESOURCE_IN_POPIN = '@@ui/SELECT_RESOURCE_IN_POPIN';

export const toggleAccordion = id => ({
  type: UI_TOGGLE_ACCORDION,
  payload: {
    id
  }
});

export const selectResource = id => ({
  type: UI_SELECT_RESOURCE_IN_POPIN,
  payload: {
    id
  }
});
