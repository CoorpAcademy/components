import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {Choice, Media} from '../../../../../../types/progression-engine';
import {choices} from './qcm';

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

const choicesWithImage: Array<Choice> = choices.map(choice => ({
  ...choice,
  media: image
}));

const fixture: Fixture = {
  props: {
    type: 'qcmGraphic',
    choices: choicesWithImage.slice(0, 3),
    onItemPress: noop
  }
};

export default fixture;
