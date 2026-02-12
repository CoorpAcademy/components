import QuestionRange from '../../slides/test/fixtures/range';

const playerProps = QuestionRange.props;
const TOUR_GROUP = 'app-player-intro-fixture';

const tutorialSteps = [
  {
    target: 'body',
    title: 'How to take a Coorpacademy course?',
    content:
      'Coorpacademy courses are based on a flipped learning approach, which adapts to your profile and the way you learn. 🎓<br/>In practice:<ul><li>you start with 4 questions,</li><li>each question is accompanied by learning resources.</li></ul>',
    order: 1,
    group: TOUR_GROUP
  },
  {
    target: '[data-name="slide"]',
    title: 'We start with the question!',
    content: 'Why? If you give the correct answer, you can complete your course faster! 🚀',
    order: 2,
    group: TOUR_GROUP
  },
  {
    target: '[data-type="media"]',
    title: 'Access lessons at any time!',
    content:
      'If you don’t have the answer, you can find the lesson here. 🔎<br/>It may be presented as a video, audio, or PDF file.',
    order: 3,
    group: TOUR_GROUP
  },
  {
    target: '[data-type="clue"]',
    title: 'Need a hint?',
    content: 'Find a clue here to help you answer the question. 💡',
    order: 4,
    group: TOUR_GROUP
  },
  {
    target: '[data-name="life"]',
    title: 'It’s okay to make mistakes!',
    content:
      'For each wrong answer, you lose a life. 💔<br/>But it’s not “Game Over” — you can keep going!',
    order: 5,
    group: TOUR_GROUP
  }
];
export default {
  props: {
    player: playerProps,
    tourguide: {
      steps: tutorialSteps,
      group: TOUR_GROUP,
      autoStart: true,
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
