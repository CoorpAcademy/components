export default {
  props: {
    'notifications': [],
    'breadcrumbs': [{
        'icon': '',
        'title': 'Platform list',
        'href': '#'
      },
      {
        'icon': '',
        'title': 'Samsung Settings'
      }],
    'links': [{
        'title': 'Go to Cockpit',
        'href': '#cockpit',
        'type': 'primary'
      },
      {
        'title': 'Go to Platform',
        'href': '#platform',
        'type': 'secondary'
      }],
    'tabs': [{
        'title': 'General Settings',
        'href': '#brand/samsung/settings',
        'selected': false,
      },
      {
        'title': 'Look & Feel',
        'href': '#brand/samsung/lookandfeel',
        'selected': true,
      },
      {
        'title': 'SSO',
        'href': '#brand/samsung/sso',
        'selected': false,
      }
    ],
    'content': {
      'groups': [{
        'title': 'Platform design',
        'fields': [{
          'title': 'Primary color',
          'value': '#ececec',
          'placeholder': '#ffffff',
          'type': 'color',
          'description': 'Lorem ipsum dolor sit amet.',
          'onChange': () => {}
        },
        {
          'title': 'Secondary color',
          'value': '#ececec',
          'placeholder': '#ffffff',
          'type': 'color',
          'description': 'Lorem ipsum dolor sit amet.',
          'onChange': () => {}
        },
        {
          'title': 'Tertirary color',
          'value': '#ececec',
          'placeholder': '#ffffff',
          'type': 'color',
          'description': 'Lorem ipsum dolor sit amet.',
          'onChange': () => {}
        },
        {
          'title': 'Validation color',
          'value': '#ececec',
          'placeholder': '#ffffff',
          'type': 'color',
          'description': 'Lorem ipsum dolor sit amet.',
          'onChange': () => {}
        },
        {
          'title': 'Error color',
          'value': '#ff0000',
          'placeholder': '#ffffff',
          'type': 'color',
          'description': 'Lorem ipsum dolor sit amet.',
          'onChange': () => {}
        }]
      }],
      'onSubmit': () => {},
      'isModified': true,
      'isPending': true
    }
  }
};
