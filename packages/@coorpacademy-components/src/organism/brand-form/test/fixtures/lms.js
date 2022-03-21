export default {
  props: {
    groups: [
      {
        title: 'Add an LMS configuration',
        fieldsLayout: 'grid',
        fields: [
          {
            type: 'select',
            options: [
              {name: '', value: ''},
              {name: 'CSOD', value: 'CSOD'},
              {name: 'SAP', value: 'SAP'},
              {name: 'XAPI', value: 'XAPI'}
            ],
            onChange: () => console.log('dispatch newConfig')
          },
          {
            type: 'button',
            submitValue: 'Add',
            onClick: () => console.log('add new slide')
          }
        ]
      },
      {
        title: 'LMS configuration',
        subtitle: 'Configure the coorpacademy integration to LMS',
        fields: [
          {
            type: 'slider',
            tabProps: [
              {
                title: 'CSOD'
              },
              {
                title: 'SAP'
              },
              {
                title: 'XAPI'
              }
            ],
            slides: [
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    value: true,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'text',
                    title: 'URL',
                    placeholder: 'https://some.fake.csod.hostname',
                    required: true,
                    value: 'https://partner0125.csod.com',
                    onChange: () => console.log('dispatch URL')
                  },
                  {
                    type: 'text',
                    title: 'Client ID',
                    required: true,
                    value: 'Some-client-id',
                    onChange: () => console.log('dispatch Client ID')
                  },
                  {
                    type: 'text',
                    title: 'Client Secret',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Client Secret')
                  },
                  {
                    type: 'text',
                    title: 'Provider',
                    description: 'This is the name you gave to Coorpacademy in CSOD.',
                    required: true,
                    value: 'COORPACADEMY',
                    onChange: () => console.log('dispatch Provider')
                  },
                  {
                    type: 'readonly',
                    title: 'Material type',
                    value: 'External Links'
                  },
                  {
                    type: 'select',
                    title: 'LMS Available Language Source',
                    options: [
                      {
                        name: 'English',
                        value: 'English',
                        selected: false
                      },
                      {
                        name: 'Français',
                        value: 'Français',
                        selected: true
                      },
                      {
                        name: 'Español',
                        value: 'Español',
                        selected: true
                      }
                    ],
                    onChange: value => console.log(value)
                  },
                  {
                    type: 'switch',
                    title: 'Course',
                    value: true,
                    onChange: () => console.log('dispatch Course')
                  },
                  {
                    type: 'switch',
                    title: 'Level',
                    value: true,
                    onChange: () => console.log('dispatch Level')
                  },
                  {
                    type: 'switch',
                    title: 'Chapter',
                    value: false,
                    onChange: () => console.log('dispatch Chapter')
                  },
                  {
                    type: 'switch',
                    title: 'Progression',
                    value: true,
                    onChange: () => console.log('dispatch Progression')
                  },
                  {
                    type: 'text',
                    title: 'Title customization',
                    description: 'Suffix at the end of the title',
                    required: false,
                    value: '- SEIQ',
                    onChange: () => console.log('dispatch Title customization')
                  },
                  {
                    type: 'readonly',
                    title: 'API used to send progressions',
                    value: 'EXPRESS_CLASS',
                    description: 'This is the API chosen to send progressions'
                  },
                  {
                    type: 'text',
                    title: 'Facilitator ID',
                    description: 'Used to prevent errors with Express Class',
                    required: true,
                    value: '1223785',
                    onChange: () => console.log('dispatch Facilitator ID')
                  },
                  {
                    type: 'doublestep',
                    toggleValue: 'Delete Configuration',
                    confirmValue: 'Confirm',
                    confirmDisabled: false,
                    cancelValue: 'Cancel',
                    description:
                      'You are about to delete the CSOD configuration. Click "confirm" to proceed.',
                    textValidation: false,
                    isPending: false,
                    onClick: () => console.log('dispatch without this config')
                  }
                ]
              },
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    value: false,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'text',
                    title: 'Contact email address',
                    placeholder: '',
                    description:
                      'The email address we should notify when new content has been exported.',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Email address')
                  },
                  {
                    type: 'text',
                    title: 'URL',
                    placeholder: 'https://some.fake.sap.hostname',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch URL')
                  },
                  {
                    type: 'text',
                    title: 'Client ID',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Client ID')
                  },
                  {
                    type: 'text',
                    title: 'Client Secret',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch ClientSecret')
                  },
                  {
                    type: 'text',
                    title: 'Scope User ID',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Scope user ID')
                  },
                  {
                    type: 'text',
                    title: 'Scope Company ID',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Scope Company ID')
                  },
                  {
                    type: 'text',
                    title: 'Provider',
                    description: 'This is the name you gave to Coorpacademy in SAP.',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Provider')
                  },
                  {
                    description:
                      'This is where you can load a custom logo (that of Coorpacademy, the client, or one specific to the learning platform) which will be added at the bottom right of the thumbnails of the different courses in SAP.<br /><br />Max file size: 5MO. Recommended format: PNG. NB: The logo will be re-sized by the media service (height = 125px & wide = 400px), therefore, a horizontal format is highly suggested.',
                    error: null,
                    imageTypes: ['svg+xml', 'jpg', 'png'],
                    key: 'payload.lms.92be090d-12a8-4a8c-a04a-5f2e89989169.watermark',
                    loading: false,
                    modified: true,
                    onChange: () => console.log('on change'),
                    onReset: () => console.log('on reset'),
                    previewLabel: 'Preview',
                    required: false,
                    title: 'Thumbnail Logo',
                    type: 'image',
                    uploadLabel: 'Upload'
                  },
                  {
                    type: 'switch',
                    title: 'Course',
                    value: false,
                    onChange: () => console.log('dispatch Course')
                  },
                  {
                    type: 'switch',
                    title: 'Level',
                    value: false,
                    onChange: () => console.log('dispatch Level')
                  },
                  {
                    type: 'switch',
                    title: 'Chapter',
                    value: false,
                    onChange: () => console.log('dispatch Chapter')
                  },
                  {
                    type: 'doublestep',
                    toggleValue: 'Delete Configuration',
                    confirmValue: 'Confirm',
                    confirmDisabled: false,
                    cancelValue: 'Cancel',
                    description:
                      'You are about to delete the SAP configuration. Click "confirm" to proceed.',
                    textValidation: false,
                    isPending: false,
                    onClick: () => console.log('dispatch without this config')
                  }
                ]
              },
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    value: false,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'text',
                    title: 'URL',
                    placeholder: 'https://some.fake.csod.hostname',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch URL')
                  },
                  {
                    type: 'readonly',
                    title: 'Authentication type',
                    value: 'basic',
                    description: 'Authentication type can only have the "basic" value'
                  },
                  {
                    type: 'text',
                    title: 'Username',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Username')
                  },
                  {
                    type: 'text',
                    title: 'Password',
                    description: 'this should be an input type password',
                    required: true,
                    value: '',
                    onChange: () => console.log('dispatch Password')
                  },
                  {
                    type: 'doublestep',
                    toggleValue: 'Delete Configuration',
                    confirmValue: 'Confirm',
                    confirmDisabled: false,
                    cancelValue: 'Cancel',
                    description:
                      'You are about to delete the XAPI configuration. Click "confirm" to proceed.',
                    textValidation: false,
                    isPending: false,
                    onClick: () => console.log('dispatch without this config')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
