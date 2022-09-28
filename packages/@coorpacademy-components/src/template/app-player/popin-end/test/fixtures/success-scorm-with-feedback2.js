import {defaultsDeep} from 'lodash/fp';
import correct from './scorm-correct';

export default defaultsDeep(correct, {
  props: {
    header: {
      type: 'learner',
      content: {
        title: 'Trivial Pursuit – Géographie',
        details: 'Base',
        onClick: () => console.log('header')
      },
      subcontent: {
        title: 'IV',
        details: '4/4'
      },
      lives: {
        count: null
      }
    },
    mode: 'scorm',
    summary: {
      header: {
        type: 'popinEnd',
        title: 'Trivial Pursuit – Géographie',
        subtitle: 'Félicitations !',
        failed: false,
        stars: '+64',
        rank: null,
        cta: {
          title: 'Accueil',
          onClick: () => console.log('Accueil')
        }
      },
      feedback: {
        title: 'Votre résultat: 16/16',
        description:
          "Bien joué, <b>on vous sent l'âme d'un véritable explorateur... ou d'un dévoreur d'atlas !</b> Sentez-vous cette odeur alléchante ? C’est le camembert qui pointe son nez. Encore un effort !",
        media: {
          src: []
        }
      },
      recommendation: {
        title: 'Recommandé pour vous : ',
        cards: []
      },
      comment: {
        isSent: false,
        confirmation: {
          commentSectionTitle: 'Merci pour votre commentaire !',
          confirmationLinkText: 'Voir votre commentaire et ceux de vos pairs.',
          onClick: () => console.log('confirmation')
        },
        edition: {
          title: 'Partagez votre opinion sur ce cours',
          value: null,
          postDisabled: true,
          onChange: null,
          onPost: null
        }
      },
      footer: {
        title: 'Accueil',
        onClick: () => console.log('footer')
      }
    }
  }
});
