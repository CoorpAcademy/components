export default {
  props: {
    navigateToMooc: () => {console.log('navigates to MOOC');}, // eslint-disable-line no-console
    hasUnsubscribed: false,
    confirmUnsubscribe: 'Souhaitez-vous vraiment vous désabonner ?',
    keepSubscription: 'Conserver mon abonnement',
    onUnsubscribeButtonClick: () => {console.log('unsubscribes');}, // eslint-disable-line no-console
    unsubscribe: 'Me désabonner de Coorpacademy',
    unsubscribeConfirmation: 'Nous vous confirmons la prise en compte de votre désabonnement qui sera effective à partir du mois prochain.\n\nD\'ici là, vous pouvez continuer de profiter du contenu sur la plateforme Coorpacademy.' // eslint-disable-line max-len
  }
};
