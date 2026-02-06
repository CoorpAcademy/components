import Qcm from '../../slides/test/fixtures/qcm';

const playerProps = Qcm.props;

export default {
  props: {
    player: playerProps,
    tourguide: {
      steps: [],
      group: 'TOUR_GROUP',
      autoStart: false,
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
