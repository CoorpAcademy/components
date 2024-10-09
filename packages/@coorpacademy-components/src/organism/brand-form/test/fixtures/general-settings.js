import BrandFormGroupPwdPrivacy from '../../../../molecule/brand-form-group/test/fixtures/doublefield';

export default {
  props: {
    groups: [
      {
        title: 'Platform Name',
        fields: [
          {
            title: 'Domain name',
            value: 'samsung.coorpacademy.com',
            type: 'readonly'
          },
          {
            title: 'Platform name',
            value: 'Samsung',
            type: 'readonly'
          }
        ]
      },
      {
        title: 'Forum',
        fields: [
          {
            title: 'Activate',
            value: false,
            type: 'switch',
            description: 'Lorem Ipsum dolor sit amet.',
            onChange: () => {}
          }
        ]
      },
      BrandFormGroupPwdPrivacy.props,
      {
        title: 'Danger Zone',
        fields: [
          {
            confirmValue: 'Confirm',
            type: 'doublestep',
            toggleValue: 'Delete Platform',
            cancelValue: 'Cancel',
            description:
              "Deleting your platform is irreversible. Enter your brand's name (yolo1) below to confirm you want to permanently delete it.",
            onClick: () => console.log('confirm'),
            textValidation: true,
            onChange: () => console.log('on change text'),
            placeholder: "Brand's name",
            icon: 'trash'
          }
        ]
      }
    ],
    onSubmit: () => {},
    submitValue: 'Save changes',
    onReset: () => {},
    resetValue: 'Cancel'
  }
};
