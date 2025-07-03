import fixtureDragAndDropWithXlsx from '../../../../atom/drag-and-drop/test/fixtures/with-xlsx';

export default {
  props: {
    items: [
      {
        sectionTitle: {
          title: 'Select one or several cohortes',
          subtitle: 'in the drop-down list',
          titleSize: 'small',
          subtitleSize: 'extra-small',
          removeMargin: true
        },
        child: {
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
              selected: false
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
          onError: () => true,
          childType: 'select-multiple'
        }
      },
      {
        sectionTitle: {
          title: 'Upload a list of specific users',
          subtitle: 'Using an Excel file (mandatory column: email address)',
          titleSize: 'small',
          subtitleSize: 'extra-small',
          removeMargin: true
        },
        child: {
          ...fixtureDragAndDropWithXlsx.props,
          title: '',
          previewContent: {},
          labelButtonLink: 'here',
          labelLink: 'Need the template? Download it',
          hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
          loading: false,
          disabled: true,
          imageTypes: 'image/*',
          childType: 'image-upload'
        }
      }
    ]
  }
};
