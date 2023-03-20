import {NovaCompositionCoorpacademyInformationIcon as InformationIcon} from '@coorpacademy/nova-icons';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    isVisible: true,
    locales: {
      cta: 'CTA',
      description1: 'description1',
      description2: 'description2',
      title: 'title'
    },
    onValidate: () => null,
    onCancel: () => null,
    Icon: InformationIcon
  }
};

export default fixture;
