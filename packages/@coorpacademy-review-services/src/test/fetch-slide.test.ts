import test from 'ava';
import nock from 'nock';
import {fetchSlide} from '../fetch-slide';
import {SlideFromAPI} from '../types/services-types';

const qcmDragSlide: SlideFromAPI = {
  question: {
    medias: [],
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7ce8',
          label: 'La démoralisation',
          value: 'sli_4yGBq-mCg.choice_4kRL5uQCg',
          id: '624f01970a234b0333bc7ce8'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7ce9',
          label: 'La stagnation',
          value: 'sli_4yGBq-mCg.choice_E11v9OXAx',
          id: '624f01970a234b0333bc7ce9'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7cea',
          label: 'La frustration',
          value: 'sli_4yGBq-mCg.choice_N1lP9dmRg',
          id: '624f01970a234b0333bc7cea'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '624f01970a234b0333bc7ceb',
          label: "L'implication",
          value: 'sli_4yGBq-mCg.choice_Eybw5dQCx',
          id: '624f01970a234b0333bc7ceb'
        }
      ],
      answers: [['L’implication', 'La frustration', 'La frustration', 'La démoralisation']]
    },
    type: 'qcmDrag',
    header: "Remettez dans l'ordre les quatre étapes du burn out.",
    explanation: 'Sélectionnez les réponses ci-dessous dans le bon ordre.'
  },
  klf: "Le burn out s'installe en quatre étapes : tout d'abord, l'implication (investissement émotionnel et/ou affectif, sacrifice de sa vie privée) ; en second, la stagnation (premières déceptions, signes de fatigue) ; ensuite, la frustration (efforts non reconnus) ; et enfin, la démoralisation (problèmes de concentration, sentiment d'inutilité, désespoir).",
  tips: "Encadré par la loi, l'entretien professionnel a pour but d'aider le collaborateur à verbaliser ses difficultés et à construire son projet professionnel.",
  universalRef: 'sli_4yGBq-mCg',
  _id: 'sli_4yGBq-mCg',
  parentContentTitle: {
    title: 'Using redux',
    type: 'chapter'
  }
};

const enQcmDragSlide: SlideFromAPI = {
  question: {
    content: {
      media: {src: [], posters: [], subtitles: []},
      choices: [
        {
          media: {src: [], posters: [], subtitles: []},
          label: 'Crisis',
          value: 'sli_4yGBq-mCg.choice_4kRL5uQCg',
          _id: '63ee977c0284f29dc3f620be',
          items: [],
          id: '63ee977c0284f29dc3f620be'
        },
        {
          media: {src: [], posters: [], subtitles: []},
          label: 'Shame and doubt',
          value: 'sli_4yGBq-mCg.choice_E11v9OXAx',
          _id: '63ee977c0284f29dc3f620bf',
          items: [],
          id: '63ee977c0284f29dc3f620bf'
        },
        {
          media: {src: [], posters: [], subtitles: []},
          label: 'Cycnicism',
          value: 'sli_4yGBq-mCg.choice_N1lP9dmRg',
          _id: '63ee977c0284f29dc3f620c0',
          items: [],
          id: '63ee977c0284f29dc3f620c0'
        },
        {
          media: {src: [], posters: [], subtitles: []},
          label: 'Investment',
          value: 'sli_4yGBq-mCg.choice_Eybw5dQCx',
          _id: '63ee977c0284f29dc3f620c1',
          items: [],
          id: '63ee977c0284f29dc3f620c1'
        }
      ],
      answers: [['Investment', 'Shame and doubt', 'Cycnicism', 'Crisis']]
    },
    type: 'qcmDrag',
    header: 'Put the 4 stages of burn out in order.',
    explanation: 'Select the answers below in the right order.',
    medias: []
  },
  _id: 'sli_4yGBq-mCg',
  klf: 'Burnout occurs in 4 stages: The first stage is personal investment (emotional and/or mental investment, sacrifice of private life); second is shame and doubt (first disappointments, signs of fatigue); next comes cynicism (unrecognised efforts); and finally crisis (concentration problems, feeling of uselessness, despair).',
  tips: 'A concept enshrined in law, work-related interviews focus on helping employees voice their difficulties and build their career.',
  universalRef: 'sli_4yGBq-mCg',
  hasClue: true,
  parentContentTitle: {title: 'Managing stress and emotions', type: 'cours'}
};

test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v1/slides/sli_123546/parentContentTitle')
    .reply(200, qcmDragSlide)
    .get('/api/v1/slides/sli_123546/parentContentTitle?lang=en')
    .reply(200, enQcmDragSlide);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch a slide with the parentTitleContent info successfully', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const slide = await fetchSlide()('sli_123546', token);
  t.deepEqual(qcmDragSlide, slide);
});

test('should fetch a slide with the parentTitleContent info on a given locale successfully', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const slide = await fetchSlide('en')('sli_123546', token);
  t.deepEqual(enQcmDragSlide, slide);
});

test('should reject if a bad token is passed', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => fetchSlide()('sli_123546', badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
