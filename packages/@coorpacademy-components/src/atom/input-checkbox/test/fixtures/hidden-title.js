import defaultFixture from './default';

export default {
  props: {
    ...defaultFixture.props,
    title: 'Select learner',
    checked: false,
    hideTitle: true,
    noLabelMargins: true,
    theme: 'coorpmanager',
    onChange: value => console.log('select learner', value)
  }
};
