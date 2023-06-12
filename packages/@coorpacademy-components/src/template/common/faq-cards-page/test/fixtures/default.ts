import Header from '../../../../../molecule/hero/test/fixtures/mode-header';
import PrivacyPolicyContact from '../../../../../molecule/privacy-policy-contact/test/fixtures/default';
import binoculaire from '../../../../../molecule/quick-access-card/test/fixtures/binoculaire';
import book from '../../../../../molecule/quick-access-card/test/fixtures/book';
import network from '../../../../../molecule/quick-access-card/test/fixtures/network';
import chatBubbleQuestion from '../../../../../molecule/quick-access-card/test/fixtures/chat-bubble-question';
import mobilePhone from '../../../../../molecule/quick-access-card/test/fixtures/mobile-phone';
import {Props, QuickAccessItem} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    header: Header.props,
    privacyPolicyContact: PrivacyPolicyContact.props,
    quickAccessList: [
      binoculaire.props as QuickAccessItem,
      book.props as QuickAccessItem,
      network.props as QuickAccessItem,
      chatBubbleQuestion.props as QuickAccessItem,
      mobilePhone.props as QuickAccessItem
    ],
    title: 'Découvrez nos guides',
    description: 'Sélectionnez la catégorie à laquelle correspond votre problématique'
  }
};
export default fixture;
