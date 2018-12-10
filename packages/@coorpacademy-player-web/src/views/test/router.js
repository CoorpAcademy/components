import test from 'ava';
import {mockTranslate} from '@coorpacademy/translate';
import identity from 'lodash/fp/identity';
import get from 'lodash/fp/get';
import {popinCorrectionStateToProps} from '../../map-state-to-props/popin-correction';
import statePopinExtraLife from '../../map-state-to-props/test/fixtures/popin-correction/popin-extra-life';

const Vimeo = {Player: () => true};
const options = {
  translate: mockTranslate,
  Vimeo
};

const mapStateToProps = popinCorrectionStateToProps(options, {dispatch: identity});

test('should open popin-correction if current content ref is extraLife', t => {
  const props = mapStateToProps(statePopinExtraLife);

  t.is(get('header.lives', props), 0);
  t.is(get('quit.cta.title', props), '__Quit');
});
