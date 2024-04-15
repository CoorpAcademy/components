import Icon from '../../../../atom/icon/test/fixtures/default-with-only-icon-name-clock';

const iconProps = Icon.props;
export default {
  props: {
    title: 'Learning hours',
    value: '28h 6mins',
    legend: 'on <b>focused skills</b>',
    icon: {...iconProps, preset: 's', backgroundColor: '#FAD6DE'}
  }
};
