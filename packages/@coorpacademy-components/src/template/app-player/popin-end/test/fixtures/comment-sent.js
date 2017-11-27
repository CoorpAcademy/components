import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      comment: {
        commentSectionTitle: 'Merci pour votre avis !',
        confirmationLinkText: 'Voir votre commentaire et ceux de vos pairs',
        onClick: () => console.log('onClick'),
        isSent: true
      }
    }
  }
});
