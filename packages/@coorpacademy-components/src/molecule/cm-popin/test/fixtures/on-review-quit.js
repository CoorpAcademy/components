export default {
  props: {
    content: 'Tu nous quittes déjà?',
    icon: 'AlertDiamond',
    mode: 'alert',
    descriptionText: `Tu vas t'en sortir ! Si tu arrêtes maintenant, tu vas perdre ta progression.`,
    firstButton: {
      label: `Arrêter ma session`,
      type: 'tertiary',
      customStyle: {
        color: '#ED3436'
      },
      'aria-label': 'Stop session',
      handleOnClick: () => {}
    },
    secondButton: {
      label: `Continuer d'apprendre`,
      type: 'primary',
      'aria-label': 'Continue review',
      handleOnClick: () => {},
      customStyle: {}
    }
  }
};
