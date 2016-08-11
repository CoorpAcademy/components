export const SELECT_COMPONENT = '@@components/select_component';

export const createSelectComponentAction = component => ({
  type: SELECT_COMPONENT,
  payload: component
});
