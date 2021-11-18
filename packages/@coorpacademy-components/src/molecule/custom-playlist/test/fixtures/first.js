import ContentTypes from '../../../../atom/radio-group/test/fixtures/default';

const {props: contentTypes} = ContentTypes;

export default {
  props: {
    id: 'first',
    title: 'Recommended for you',
    onUp: null,
    onDown: e => {
      console.log(e);
    },
    display: {
      value: true,
      modified: true,
      onChange: value => console.log(value)
    },
    contentTypes: {
      ...contentTypes,
      modified: true
    }
  }
};
