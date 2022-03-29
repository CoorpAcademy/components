import logoUpload from '../../../../molecule/title-and-checkbox-wrapper/test/fixtures/drag-drop-without-title';

export default {
  props: {
    groups: [
      {
        fields: [
          {
            type: 'selectMultiple',
            title: 'Languages',
            placeholder: 'Language selection',
            description:
              'The name and description of your certification will be displayed in the selected language. Only the selected language will be saved. You can translate during step 2 "Translations".',
            theme: 'coorpmanager',
            hint: '15 / 30 characters',
            size: 'default',
            options: [
              {
                name: '🇬🇧 English',
                value: 'en',
                selected: true
              },
              {
                name: '🇩🇪 German',
                value: 'de',
                selected: false
              },
              {
                name: '🇹🇭 Thai',
                value: 'th',
                selected: false
              },
              {
                name: '🇪🇸 Spanish',
                value: 'es',
                selected: false
              }
            ],
            multiple: false
          },
          {
            type: 'text',
            title: 'Playlist name',
            placeholder: 'Playlist name',
            description: 'This is the tooltip text',
            theme: 'coorpmanager',
            hint: '15 / 30 characters',
            value: 'Marketing expert',
            size: 'default'
          },
          {
            type: 'textarea',
            title: 'Description',
            placeholder: 'Description',
            description: 'This is the tooltip text',
            theme: 'coorpmanager',
            hint: '80 / 200 characters',
            size: 'medium',
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum sem ac fermentum luctus. Integer eu dui magna. Donec ut tristique dui. Vestibulum non accumsan tellus. Donec luctus erat vitae aliquet viverra. Mauris malesuada tortor quis viverra vestibulum. Nullam laoreet porta massa vitae porta.'
          },
          {
            ...logoUpload.props,
            type: 'titleAndCheckBoxWrapper'
          }
        ]
      }
    ]
  }
};
