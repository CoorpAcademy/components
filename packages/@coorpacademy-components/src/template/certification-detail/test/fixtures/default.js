import cardsGrid from '../../../../organism/cards-grid/test/fixtures/catalog';

const cards = cardsGrid.props;
const allCourses = cards;

export const defaultProps = {
  certificationRef: 'cert_1',
  title: 'Expert techniques for managing team conflict',
  logoUrl: 'https://static.coorpacademy.com/content/onboarding/raw/badge-reward-1685105201663.png',
  metrics: {
    progression: 14,
    stars: 250,
    mandatoryModules: 15,
    totalModules: 24
  },
  diplomaUrl: 'https://onboarding.coorpacademy.com/diplomas/cert_q1dFPSqgyS',
  badgeUrl: 'https://static.coorpacademy.com/content/onboarding/raw/badge-reward-1685105201663.png',
  playlistRef: 'expert-techniques',
  description: `Validez les 25 modules du certificat pour l’obtenir.

Test initial : <i>Les basiques du management d’équipe : testez-vous !</i>

Objectifs :
—Organiser et manager le travail d’équipe
—Motiver vos équipes
—Communiquer efficacement
—Développer les compétences et la performance d’équipe
—Faire preuve de leadership et d’assertivité
—Faire preuve d'intelligence émotionnelle et gérer les conflits`,
  ongoingCoursesAvailable: true,
  certificationCourses: allCourses,
  filters: {
    options: [
      {
        name: 'All content',
        value: 'ALL',
        selected: true
      },
      {
        name: "5' learning",
        value: 'microlearning',
        selected: false
      },
      {
        name: 'Courses',
        value: 'learner',
        selected: false
      },
      {
        name: 'Video',
        value: 'video',
        selected: false
      },
      {
        name: 'Animated ressources',
        value: 'scorm',
        selected: false
      },
      {
        name: 'Podcast',
        value: 'podcast',
        selected: false
      },
      {
        name: 'Document',
        value: 'document',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  },
  onBackClick: () => console.log('Back clicked'),
  onReviewClick: () => console.log('Review clicked'),
  onContinueLearningClick: () => console.log('Continue learning clicked')
};

export default {
  props: defaultProps
};
