import {defaultsDeep} from 'lodash/fp';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      header: {
        type: 'popinEnd'
      },
      comment: {
        confirmation: {
          commentSectionTitle: 'Merci pour votre avis !',
          confirmationLinkText: 'Voir votre commentaire et ceux de vos pairs',
          onClick: () => console.log('onClick')
        },
        isSent: true
      }
    }
  }
});
