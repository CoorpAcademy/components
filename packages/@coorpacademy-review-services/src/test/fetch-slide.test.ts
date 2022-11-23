import test from 'ava';
import nock from 'nock';
import {fetchSlide} from '../fetch-slide';
import {SlideFromAPI} from '../types/services-types';

const qcmDragSlide: SlideFromAPI = {
  question: {
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

test.before(() => {
  nock('http://localhost:3000')
    .get('/api/v1/slides/sli_123546/parentContentTitle')
    .reply(200, qcmDragSlide);
});

test.after(() => {
  nock.cleanAll();
});

test('should fetch a slide with the parentTitleContent info successfully', async t => {
  const token = process.env.API_TEST_TOKEN || '';
  const slide = await fetchSlide('sli_123546', token);
  t.deepEqual(qcmDragSlide, slide);
});

test('should reject if a bad token is passed', async t => {
  const badToken = 'token is not a jwt';
  const error = await t.throwsAsync(() => fetchSlide('sli_123546', badToken));

  t.is(
    error?.message,
    "Invalid token specified: Cannot read properties of undefined (reading 'replace')"
  );
});
