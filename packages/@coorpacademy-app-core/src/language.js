export const CHANGE_LANGUAGE = '@@language/CHANGE';

const createLanguageChange = lang => ({
  type: CHANGE_LANGUAGE,
  payload: lang
});

const createLanguageReducer = (defaultLang = null) => (state = defaultLang, action) => {
  if (action.type === CHANGE_LANGUAGE) return action.payload;
  return state;
};

export {createLanguageChange, createLanguageReducer};
