export default {
  props: {
    header: 'ASSISTANCE',
    content:
      'Un souci sur la plateforme ?<br>Consultez notre <a target="_blank" href="https://www.support.coorpacademy.com/faq-clients-fr" class="ng-scope">FAQ client</a> ou contactez-nous',
    type: 'assistance',
    secondeButtonLabel: 'Envoyer',
    onFirstButtonClick: undefined,
    firstButtonLabel: undefined,
    onSecondeButtonClick: () => {},
    onClose: () => {}
  }
};
