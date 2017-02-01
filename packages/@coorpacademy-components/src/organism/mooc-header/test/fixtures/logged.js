import defaultsDeep from 'lodash/fp/defaultsDeep';
import sliderFixtures from '../../../../molecule/slider/test/fixtures/default';
import Default from './default';

const slider = sliderFixtures.props;

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    slider,
    user: {
      picture: 'http://images.sudouest.fr/2016/10/10/57fb784366a4bd201104c765/widescreen/1000x500/ken-bone-citoyen-invite-a-interroger-les-candidats-lors-du-debat-organise-la-nuit-derniere-est-devenu-une-star-sur-twitter.jpg',
      notifications: 5,
      link: '#'
    }
  })
};
