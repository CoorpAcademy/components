import {defaultsDeep} from 'lodash/fp';
import correct from './scorm-correct';

export default defaultsDeep(correct, {
  props: {
    header: {
      type: 'learner',
      content: {
        title: 'Trivial Pursuit – Géographie',
        details: 'Base',
        onClick: () => {
          console.log('Retry level - header cta');
        }
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
        title: 'Oups...',
        subtitle: 'Bien tenté !',
        failed: true,
        lives: null,
        rank: null,
        stars: null,
        cta: {
          onClick: () => {
            console.log('Retry level - header cta');
          },
          title: 'Réessayez ce niveau'
        }
      },
      action: {
        type: 'simple',
        prefix: 'Réessayez ce niveau :',
        title: 'Trivial Pursuit – Géographie - Base',
        button: {
          title: 'Réessayez ce niveau',
          onClick: () => {
            console.log('Retry level - header cta');
          }
        }
      },
      feedback: {
        title: 'Votre résultat: 3/16',
        description:
          'Dommage, <b>vous n’êtes pas tout à fait prêt à animer un cours de géo sur le bassin méditerranéen…</b> Le camembert, ce n’est pas pour tout de suite. Allez, prenez un bout de brie et retentez votre chance !',
        media: {
          src: []
        }
      },
      recommendation: {
        title: 'Recommandé pour vous : ',
        cards: []
      },
      comment: null,
      footer: {
        title: 'Accueil',
        onClick: () => {
          console.log('Retry level - header cta');
        }
      }
    }
  }
});
