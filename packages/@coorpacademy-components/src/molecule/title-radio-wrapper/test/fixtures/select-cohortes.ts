import radioWithTitle from '../../../../atom/radio-with-title/test/fixtures/default';

export default {
  props: {
    radioWithTitle: {...radioWithTitle.props},
    field: {
      theme: 'coorpmanager',
      placeholder: 'Select cohorte(s)',
      title: 'Cohortes',
      description: 'You should select a cohorte',
      multiple: true,
      disabled: false,
      error: '',
      hint: '',
      options: [
        {
          name: 'ABRERA FCM',
          value: 'abrera-fcm',
          selected: true
        },
        {
          name: 'ABRERA FIS',
          value: 'abrera-fis',
          selected: false
        },
        {
          name: 'ALLARIZ',
          value: 'allariz',
          selected: false
        },
        {
          name: 'ALMUSSAFESS FCM',
          value: 'almussafes-fcm',
          selected: false
        }
      ],
      onChange: (value: unknown) => console.log('onChange', value),
      onError: () => true
    },
    childType: 'select-multiple'
  }
};
