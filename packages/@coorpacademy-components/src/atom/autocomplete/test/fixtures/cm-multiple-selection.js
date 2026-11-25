import {noop} from 'lodash/fp';

export default {
  props: {
    id: 'department-values',
    title: 'Department',
    theme: 'coorpmanager',
    value: '',
    showSuggestionsOnFocus: true,
    keepSuggestionsOnSelect: true,
    focusInputOnSuggestionClick: true,
    suggestions: [
      {name: 'Finance', value: 'finance'},
      {name: 'Marketing', value: 'marketing'}
    ],
    onFetch: noop,
    onSuggestionSelected: noop
  }
};
