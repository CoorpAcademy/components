import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'Shared learning level',
    notification: {...fixture.props.notification},
    assignments: [
      {title: 'Safety < essentials & onboarding'},
      {title: 'Leadership & development for distributed teams with a long assignment name'}
    ]
  }
};
