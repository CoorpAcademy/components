import Icon from '../../../../atom/icon/test/fixtures/default-with-only-icon-name-and-bg-color-green-hex';

const iconProps = Icon.props;
export default {
  props: {
    title: 'Courses completed',
    value: '165',
    legend: 'focused skills',
    icon: {...iconProps, preset: 's'}
  }
};
