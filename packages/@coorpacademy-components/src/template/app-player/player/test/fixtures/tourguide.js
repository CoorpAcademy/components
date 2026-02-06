import QcmGraphic from '../../slides/test/fixtures/qcm-graphic';

const TOUR_GROUP = 'app-player-intro-fixture';

const tutorialSteps = [
  {
    target: 'body',
    title: 'Comment suivre un cours Coorpacademy ?',
    content:
      "Les formations Coorpacademy sont basées sur la pédagogie inversée, qui permet de s’adapter à votre profil et à votre façon d'apprendre. 🎓<br/>Concrètement :<ul><li>vous commencez par 4 questions,</li><li>chaque question est accompagnée des ressources pédagogiques.</li></ul>",
    order: 1,
    group: TOUR_GROUP
  },
  {
    target: '[data-name="slide"]',
    title: 'On commence par la question !',
    content:
      'Pourquoi ? Si vous avez la bonne réponse, cela vous permet de terminer votre cours plus rapidement ! 🚀',
    order: 2,
    group: TOUR_GROUP
  },
  {
    target: '[data-type="media"]',
    title: 'Consulter les leçons à tout moment !',
    content:
      "Lorsque vous n'avez pas la réponse, vous pouvez retrouver la leçon ici. 🔎<br/>Celle-ci se présente sous forme de vidéo, d'audio ou de fichier pdf.",
    order: 3,
    group: TOUR_GROUP
  },
  {
    target: '[data-type="clue"]',
    title: 'Besoin d’un coup de pouce ?',
    content: 'Retrouvez un indice pour vous aider à répondre à la question. 💡',
    order: 4,
    group: TOUR_GROUP
  },
  {
    target: '[data-name="life"]',
    title: 'Vous avez le droit de vous tromper !',
    content:
      'Pour chaque mauvaise réponse, vous perdez une vie. 💔<br/>Mais ce n’est pas « Game Over », vous pouvez continuer !',
    order: 5,
    group: TOUR_GROUP
  }
];

const playerProps = QcmGraphic.props;

export default {
  props: {
    player: {
      ...playerProps
    },
    tourguide: {
      steps: tutorialSteps,
      group: TOUR_GROUP,
      autoStart: true,
      startStep: 2,
      onStepChange: () => console.log('tourguide step change'),
      onExit: () => console.log('tourguide exit'),
      onFinish: () => console.log('tourguide finish'),
      options: {
        closeButton: false,
        nextLabel: 'Suivant →',
        prevLabel: '←',
        finishLabel: 'Commencer →',
        targetPadding: 2,
        showStepDots: false,
        keyboardControls: true,
        exitOnEscape: true,
        exitOnClickOutside: true,
        debug: true,
        completeOnFinish: true,
        rememberStep: true
      }
    }
  }
};
