import ContentTypes from '../../../../atom/radio-group/test/fixtures/default';

const {props: contentTypes} = ContentTypes;

export default {
  props: {
    id: 'default',
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
