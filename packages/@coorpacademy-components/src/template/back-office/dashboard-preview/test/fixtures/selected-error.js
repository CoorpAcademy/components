import Header from '../../../../../organism/setup-header/test/fixtures/default';

export default {
  props: {
    header: Header.props,
    dashboards: [
      {
        name: 'Analytics Engagement',
        description: "Stats d'engagement des utilisateurs"
      },
      {
        name: 'Analytics Content',
        description: 'Stats de consommation du contenu'
      },
      {
        name: 'Analytics Partners',
        description: 'Stats de consommation du contenu du partenaire'
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
    url: null,
    error: 'Shit happened',
    onErrorRedirect: () => console.log('REDIRECT TO BE DONE'),
    onSelectDashboard: dashboard => console.log('SELECTED', dashboard),
    onUpdateVersion: version => console.log('VERSION', version),
    onUpdateField: (field, value) => console.log('UPDATE', field, value),
    inputParams: {
      provider: 'connect'
    }
  }
};
