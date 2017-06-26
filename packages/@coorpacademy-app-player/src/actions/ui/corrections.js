export const UI_TOGGLE_ACCORDION = '@@ui/TOGGLE_ACCORDION';

export const toggleAccordion = id => dispatch => {
  dispatch({
    type: UI_TOGGLE_ACCORDION,
    payload: {
      id
    }
  });
};
