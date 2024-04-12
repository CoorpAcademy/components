import Icon from '../../../../atom/icon/test/fixtures/default-with-only-icon-name-circle-question';

const iconProps = Icon.props;
export default {
  props: {
    title: 'Questions answered',
    value: '12 585',
    legend: {prefix: 'on', main: 'focused skills'},
    icon: {...iconProps, preset: 's', backgroundColor: '#FFDCD1'}
  }
};
