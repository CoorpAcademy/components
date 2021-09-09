import Header from '../../../setup-header/test/fixtures/default';

export default {
  props: {
    header: Header.props,
    dashboards: [
      {
        name: 'Analytics Engagement',
        description: "Stats d'engagement des utilisateurs",
        href: '/dashboards/analytics-engagement'
      },
      {
        name: 'Analytics Content',
        description: 'Stats de consommation du contenu',
        href: '/dashboards/analytics-content'
      },
      {
        name: 'Analytics Partners',
        description: 'Stats de consommation du contenu du partenaire',
        href: '/dashboards/analytics-partners'
      }
    ],
    currentDashboard: {
      name: 'Analytics Content',
      description: 'Stats de consommation du contenu',
      versions: {
        v1: 'aa-ee-bb-cc-dd',
        v2: 'aa-ee-bb-cc-dd-ff',
        v3: 'aa-ee-bb-cc-dd-xx'
      },
      currentVersion: 'v2',
      schema: ['platform', 'provider']
    },
    url: 'https://coorpacademy.github.io/',
    onSelectDashboard: dashboard => console.log('SELECTED', dashboard),
    onUpdateVersion: version => console.log('VERSION', version),
    onUpdateField: (field, value) => console.log('UPDATE', field, value),
    inputParams: {
      platform: 'up',
      provider: 'connect'
    },
    sidebarItems: [
      {title: 'Analytics Engagement', type: 'info', value: `Stats d'engagement des utilisateurs`},
      {
        title: 'platform',
        name: 'platform-field',
        type: 'inputtext',
        onChange: (field, value) => console.log('UPDATE', field, value),
        value: 'up'
      },
      {
        title: 'provider',
        name: 'provider-field',
        type: 'inputtext',
        onChange: (field, value) => console.log('UPDATE', field, value),
        value: 'connect'
      },
      {
        title: 'Version',
        type: 'select',
        name: 'version-field',
        onChange: version => console.log('VERSION', version),
        options: [
          {name: 'v1', value: 'v1', selected: false},
          {name: 'v2', value: 'v2', selected: true},
          {name: 'v3', value: 'aa-ee-bb-cc-dd-xx', selected: false}
        ]
      }
    ]
  }
};
