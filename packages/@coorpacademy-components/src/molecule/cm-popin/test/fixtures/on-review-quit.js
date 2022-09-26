export default {
  props: {
    content: 'Tu nous quittes déjà ?',
    icon: 'AlertDiamond',
    mode: 'alert',
    descriptionText: `Tu vas t'en sortir ! Si tu arrêtes maintenant, tu vas perdre ta progression.`,
    firstButton: {
      label: 'Arrêter ma session',
      type: 'secondary',
      /* customStyle: {
        color: '#ED3436'
      }, */
      handleOnclick: () => {
        console.log('stop session');
      },
      'aria-label': 'Stop my session'
    },
    secondButton: {
      largeButton: true,
      label: `Continuer d'apprendre`,
      type: 'primary',
      'aria-label': 'Reload',
      handleOnClick: () => {
        console.log('continue revising');
      }
    },
    onClose: () => console.log('onClose')
  }
};
