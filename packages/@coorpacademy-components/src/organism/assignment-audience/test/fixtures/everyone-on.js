import combined from './combined';

export default {
  props: {...combined.props, everyone: {...combined.props.everyone, value: true}}
};
