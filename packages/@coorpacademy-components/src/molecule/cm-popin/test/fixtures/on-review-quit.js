export default {
  props: {
    content: 'Tu nous quittes déjà ?',
    descriptionText: 'Si tu arrêtes maintenant, tu vas perdre ta progression',
    mode: 'onReviewQuit',
    icon: 'WindowUpload',
    onClose: () => {
      console.log('close');
    },
    firstButton: {
      label: 'Arrêter ma session',
      type: 'secondary',
      handleOnclick: () => {
        console.log('stop session');
      },
      'aria-label': 'Stop session'
    },
    secondButton: {
      label: 'Continuer de réviser',
      type: 'primary',
      handleOnclick: () => {
        console.log('continue review');
      },
      'aria-label': 'Continue review'
    }
  }
};
