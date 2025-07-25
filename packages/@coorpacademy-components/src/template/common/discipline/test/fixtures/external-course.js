import {uniqueId, update} from 'lodash/fp';
import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/more-info';
import externalCourseCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import Thread from '../../../../../molecule/forum/forum-thread/test/fixtures/default';
import ForumComment from '../../../../../molecule/forum/forum-comment/test/fixtures/default';

import Default from './default';

const thread = Thread.props;

const threads = [thread].map(update('id', () => uniqueId()));

const {props} = Default;
const {rating, maxRating} = externalCourseCTA.props;
const {authors} = disciplinePartners.props;
const {image} = disciplineHeader.props;
export default {
  props: {
    ...props,
    popularity: rating,
    maxPopularity: maxRating,
    authors,
    buy: null,
    buyLabel: null,
    video: null,
    image,
    skills: [
      {
        ref: 'skill-ref-1',
        locale: 'Skill 1',
        focused: true
      },
      {
        ref: 'skill-ref-2',
        locale: 'Skill 2'
      },
      {
        ref: 'skill-ref-3',
        locale: 'Skill 3'
      }
    ],
    content: {
      title: 'Les nouveaux business',
      time: '2H20',
      skills: [
        'Connaître l’ensemble des leviers au service de la génération de trafic',
        'Comprendre les différences entre les coûts media'
      ]
    },
    onSkillClick: () => console.log('skill clicked'),
    levels: null,
    level: {
      ...props.content,
      title: null,
      discussion: {
        ...ForumComment.props,
        title: 'Sandbox discussion',
        threads
      }
    }
  }
};
