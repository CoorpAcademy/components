import noop from 'lodash/fp/noop';
import type {Media} from '../../../../molecule/questions/types';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const url =
  'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-eyrolles/cockpit-eyrolles/default/shutterstock_123603871-1-1545058448041.jpg&h=500&w=500&q=90&m=contain';

const image: Media = {
  type: 'img',
  src: [
    {
      _id: '1',
      mimeType: 'image/jpeg',
      url
    }
  ],
  url
};

const fixture: Fixture = {
  props: {
    questionType: 'qcm',
    onPress: noop,
    media: image,
    isSelected: true,
    children:
      'a very very very long long long long long long long long long long long long long long long long text'
  }
};

export default fixture;
