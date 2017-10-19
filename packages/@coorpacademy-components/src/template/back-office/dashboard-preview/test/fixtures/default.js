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
    ]
  }
};
