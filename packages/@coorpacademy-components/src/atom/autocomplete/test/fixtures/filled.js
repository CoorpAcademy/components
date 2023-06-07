import Default from './default';

const {props} = Default;

export default {
  props: {
    ...props,
    title: 'Population',
    value: 'c',
    suggestions: [
      {
        name: 'C',
        value: 1972
      },
      {
        name: 'C#',
        value: 2000
      },
      {
        name: 'C++',
        value: 1983
      },
      {
        name: 'Clojure',
        value: 2007
      }
    ],
    onInput: e => {
      const value = e.target.value;
      console.log(`onInput ${value}`, e);
    },
    onFetch: e => {
      const {value} = e;
      console.log(`onFetch ${value}`);
    },
    onClear: e => {
      console.log('onClear', e);
    },
    onSuggestionSelected: data => {
      console.log('onSuggestionSelected', data);
    },
    onBlur: (e, selectedSuggestion) => {
      console.log('onBlur > selected', selectedSuggestion);
    }
  }
};
