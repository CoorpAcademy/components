import ResourceBrowser from '../../../../organism/resource-browser/test/fixtures/vimeo';

const {
  props: {resources}
} = ResourceBrowser;

export default {
  props: {
    content: {
      title: 'Les nouveaux business',
      course_scope: ['24 QUESTIONS', '3 VIDÉOS'],
      time: '2H20',
      skills: [
        'Connaître l’ensemble des leviers au service de la génération de trafic',
        'Comprendre les différences entre les coûts media'
      ],
      chapters: [
        {name: 'Les leviers pour générer du trafic vers un site web'},
        {name: 'Les types de coûts en publicité'},
        {name: 'Le display à la performance'}
      ],
      resources
    }
  }
};
