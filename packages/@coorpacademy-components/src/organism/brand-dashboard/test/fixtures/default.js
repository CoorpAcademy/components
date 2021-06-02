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
    onSelectDashboard: dashboard => console.log('SELECTED', dashboard)
  }
};
