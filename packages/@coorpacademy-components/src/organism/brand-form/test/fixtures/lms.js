import Desktop from '../../../../atom/input-file-draggable/test/fixtures/desktop';

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
              },
              {
                title: 'Go1'
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
                    icon: 'trash',
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
                    filesTypes: ['svg+xml', 'jpg', 'png'],
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
                    icon: 'trash',
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
                    type: 'password',
                    title: 'Password',
                    description: 'this should be an input type password',
                    required: true,
                    value: 'XXXX-XXXX-XXXX',
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
                    icon: 'trash',
                    onClick: () => console.log('dispatch without this config')
                  }
                ]
              },
              {
                fields: [
                  {
                    type: 'switch',
                    title: 'Enabled',
                    description:
                      'Activating this toggle will trigger a global restream of the content mapping at the chosen granularity(ies) and of all the completions.',
                    value: true,
                    onChange: () => console.log('dispatch Enabled')
                  },
                  {
                    type: 'slider',
                    tabProps: [
                      {
                        title: 'Go1 API configuration'
                      },
                      {
                        title: 'Content stream configuration'
                      },
                      {
                        title: 'Progresion stream configuration'
                      }
                    ],
                    slides: [
                      {
                        fields: [
                          {
                            type: 'text',
                            title: 'URL for the point of entry (API)',
                            placeholder: '',
                            description:
                              'This is the URL to communicate with a Client LMS instance’s API.',
                            required: true,
                            value: 'https://partner0125.csod.com',
                            onChange: () => console.log('dispatch URL')
                          },
                          {
                            type: 'text',
                            title: 'Url for the authentication API',
                            description:
                              'This is the Url to get a JWT to communicate with go1 API.',
                            placeholder: '',
                            required: true,
                            value: 'https://partner0125.csod.com',
                            onChange: () => console.log('dispatch URL')
                          },
                          {
                            type: 'text',
                            title: 'Client ID',
                            description:
                              'This is the Client ID to connect to a specific LMS instance.',
                            required: true,
                            value: 'Some-client-id',
                            onChange: () => console.log('dispatch Client ID')
                          },
                          {
                            type: 'text',
                            title: "Client's secret or password",
                            description: 'Client secret associated to the Client ID',
                            required: true,
                            value: '',
                            onChange: () => console.log('dispatch Client Secret')
                          }
                        ]
                      },
                      {
                        fields: [
                          {
                            type: 'select',
                            title: 'Lo Type',
                            options: [
                              {
                                name: 'link',
                                value: 'link',
                                selected: false
                              },
                              {
                                name: 'interactive',
                                value: 'interactive',
                                selected: true
                              }
                            ],
                            onChange: value => console.log(value)
                          },
                          {
                            type: 'switch',
                            title: 'Course (discipline)',
                            description:
                              'Activating this toggle will trigger a restream at the Course (discipline) granularity.',
                            value: true,
                            onChange: () => console.log('dispatch Course')
                          },
                          {
                            type: 'switch',
                            title: 'Level (module)',
                            description:
                              'Activating this toggle will trigger a restream at the Level (module) granularity.',
                            value: true,
                            onChange: () => console.log('dispatch Level')
                          },
                          {
                            type: 'switch',
                            title: 'Chapter (microlearning)',
                            description:
                              'Activating this toggle will trigger a restream at the Chapter (microlearning) granularity.',
                            value: false,
                            onChange: () => console.log('dispatch Chapter')
                          },
                          {
                            type: 'switch',
                            title: 'External content',
                            description:
                              'Activating this toggle will trigger a restream at the External content granularity.',
                            value: false,
                            onChange: () => console.log('dispatch External content')
                          },
                          {
                            ...Desktop.props,
                            title: 'Thumbnail Logo',
                            type: 'image'
                          }
                        ]
                      },
                      {
                        fields: [
                          {
                            type: 'switch',
                            title: 'Progression',
                            description:
                              'Activating this toggle will trigger a restream of the completions.',
                            value: true,
                            onChange: () => console.log('dispatch Progression')
                          },
                          {
                            type: 'switch',
                            title: 'Create user if not existant',
                            value: true,
                            onChange: () => console.log('dispatch Create user')
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'doublestep',
                    toggleValue: 'Delete Configuration',
                    confirmValue: 'Confirm',
                    confirmDisabled: false,
                    cancelValue: 'Cancel',
                    description:
                      'You are about to delete the go1 configuration. Click "confirm" to proceed.',
                    textValidation: false,
                    isPending: false,
                    icon: 'trash',
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
