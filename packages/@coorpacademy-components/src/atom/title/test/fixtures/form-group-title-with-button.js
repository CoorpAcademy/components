import buttonProps from '../../../button-link/test/fixtures/button-primary-icon-left';

export default {
  props: {
    type: 'form-group',
    title: 'Roles',
    subtitle: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
    button: {
      ...buttonProps.props,
      label: 'Create skill',
      icon: {
        position: 'left',
        faIcon: {
          name: 'plus',
          color: 'white',
          customStyle: {
            padding: 0
          }
        }
      },
      customStyle: {
        width: 'fit-content'
      }
    }
  }
};
