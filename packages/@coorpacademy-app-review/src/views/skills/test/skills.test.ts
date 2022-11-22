import test from 'ava';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import {translate} from '@coorpacademy/review-services/es/mock/services.mock';
import {StoreState} from '../../../reducers';
import {mapStateToSkillsProps} from '..';
import {skin} from '../../slides/test/fixtures/skin';

const connectedOptions = {translate, onQuitClick: identity, skin};

test('should create initial props when there are no skills on the state', t => {
  const state: StoreState = {
    data: {
      progression: null,
      skills: [],
      slides: {},
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: null
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      positions: [0, 1, 2, 3, 4],
      navigation: ['loader', 'skills'],
      answers: {},
      slide: {},
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSkillsProps(state, connectedOptions);

  t.deepEqual(props, {
    'aria-label': translate('list_aria_label'),
    title: translate('list_title'),
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    listSkills: [],
    titleNoSkills: translate('no_skills.title'),
    textNoSkills: translate('no_skills.text'),
    iconSkillAriaLabel: 'Image without information'
  });
});

test('should create initial props when skills on the state', t => {
  const state: StoreState = {
    data: {
      progression: null,
      skills: [
        {
          skillRef: '_skill-ref',
          slidesToReview: 2,
          name: 'skill-test',
          custom: false
        },
        {
          skillRef: '_skill-ref-2',
          slidesToReview: 5,
          name: 'skill-test-2',
          custom: true
        }
      ],
      slides: {},
      token: '1234',
      corrections: {},
      rank: {start: Number.NaN, end: Number.NaN},
      currentSkill: null
    },
    ui: {
      showCongrats: false,
      currentSlideRef: '',
      positions: [0, 1, 2, 3, 4],
      navigation: ['loader', 'skills'],
      answers: {},
      slide: {},
      showQuitPopin: false,
      showButtonRevising: false
    }
  };

  const props = mapStateToSkillsProps(state, connectedOptions);

  t.deepEqual(omit('listSkills', props), {
    'aria-label': translate('list_aria_label'),
    title: translate('list_title'),
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    titleNoSkills: translate('no_skills.title'),
    textNoSkills: translate('no_skills.text'),
    iconSkillAriaLabel: 'Image without information'
  });
  t.deepEqual(map(omit('onClick'), props.listSkills), [
    {
      'aria-label': translate('card.aria_label'),
      isCustom: false,
      skillTitle: 'skill-test',
      skillAriaLabel: 'skill-test',
      buttonLabel: translate('card.button_text'),
      buttonAriaLabel: translate('card.button_text'),
      reviseLabel: translate('card.text', {total: '2'}),
      reviseAriaLabel: translate('card.text', {total: '2'})
    },
    {
      'aria-label': translate('card.aria_label'),
      isCustom: true,
      skillTitle: 'skill-test-2',
      skillAriaLabel: 'skill-test-2',
      buttonLabel: translate('card.button_text'),
      buttonAriaLabel: translate('card.button_text'),
      reviseLabel: translate('card.text', {total: '5'}),
      reviseAriaLabel: translate('card.text', {total: '5'})
    }
  ]);
  t.notThrows(() => props.listSkills[0].onClick());
});
