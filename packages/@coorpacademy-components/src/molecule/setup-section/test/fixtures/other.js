import ContentTypes from '../../../../atom/radio-group/test/fixtures/last-selected';

const {props: contentTypes} = ContentTypes;

export default {
  props: {
    id: 'other',
    title: 'Recommended for you',
    onUp: e => {
      console.log(e);
    },
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      onChange: value => console.log(value)
    },
    contentTypes
  }
};
