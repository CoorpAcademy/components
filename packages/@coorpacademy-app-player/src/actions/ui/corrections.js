export const UI_TOGGLE_ACCORDION = '@@ui/TOGGLE_ACCORDION';

export const toggleAccordion = (dispatch, id) => {
  dispatch({
    type: UI_TOGGLE_ACCORDION,
    payload: {
      id
    }
  });
};
