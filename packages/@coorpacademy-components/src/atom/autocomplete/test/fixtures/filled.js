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
    ]
  }
};
