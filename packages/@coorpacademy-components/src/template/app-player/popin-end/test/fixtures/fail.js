import {defaultsDeep} from 'lodash/fp';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    summary: {
      header: {
        type: 'popinEnd',
        title: 'Ooops...',
        subtitle: 'Nice try!',
        failed: true,
        cta: {title: 'Retry level'}
      },
      action: {
        type: 'simple',
        prefix: 'Retry level:',
        title: 'Boussole managériale - Basic',
        button: {title: 'Retry level'}
      },
      feedback: {
        title: 'Encore un effort !',
        description:
          'Grâce à votre évaluation, nous avons identifié des cours pour progresser sur les différentes thématiques. Lancez-vous, puis retentez la boussole managériale !\nNous vous recommandons de suivre :\n<b>Rituels et développer ses équipes :</b>\n– Réunions et réunionistes\n– Gérer les conflits\n– Le bien-être au travail\n– Contourner les défauts du leadership\n<b>Manager à distance :</b>\n– Télétravail : de la théorie aux bonnes pratiques\n– Manager son équipe à distance\n– Équilibre vie personnelle et vie prof...',
        media: {
          type: 'pdf',
          poster:
            'https://api-staging.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-iquera/cockpit-iqera/default/iqera_feedback_boussole-manageriale_poster-1624461932596.png&h=600&w=600&q=90&m=contain',
          mimeType: 'application/pdf',
          mediaUrl:
            '//static.coorpacademy.com/content/CoorpAcademy/content-iquera/cockpit-iqera/raw/iqera_feedback_boussole-manageriale_v2-1624461751676.pdf',
          src: []
        }
      },
      footer: {
        title: 'Back to home'
      }
    }
  }
});
