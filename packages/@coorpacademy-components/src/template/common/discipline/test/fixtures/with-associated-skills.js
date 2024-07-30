import {update, uniqueId, head} from 'lodash/fp';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/long-description';
import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/more-info';
import disciplineCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/medias';
import Thread from '../../../../../molecule/forum/forum-thread/test/fixtures/default';
import ForumComment from '../../../../../molecule/forum/forum-comment/test/fixtures/default';

const thread = Thread.props;

const threads = [thread].map(update('id', () => uniqueId()));

const {title, description, video, image, lastUpdated} = disciplineHeader.props;
const {start, buy, startLabel, buyLabel} = disciplineCTA.props;
const {authors} = disciplinePartners.props;
const {content, levels} = disciplineScope.props;

export default {
  props: {
    selected: 2,
    start,
    buy,
    startLabel,
    buyLabel,
    title,
    description,
    image,
    video,
    lastUpdated,
    authors: [head(authors)],
    changeLevel: () => true,
    level: {
      ...content,
      discussion: {
        ...ForumComment.props,
        title: 'Sandbox discussion',
        threads
      }
    },
    levels,
    skills: [
      {
        id: 'skill-id-1',
        ref: 'skill-ref-1',
        locale: 'Emotional Intelligence and Self-awareness',
        focused: true
      },
      {
        id: 'skill-id-2',
        ref: 'skill-ref-2',
        locale: 'Skill 2',
        focused: true
      },
      {
        id: 'skill-id-3',
        ref: 'skill-ref-3',
        locale: 'Skill 3',
        focused: false
      },
      {
        id: 'skill-id-4',
        ref: 'skill-ref-4',
        locale: 'Really Emotional Intelligence and Self-awareness',
        focused: false
      },
      {
        id: 'skill-id-5',
        ref: 'skill-ref-5',
        locale: 'Skill 5',
        focused: false
      }
    ],
    onSkillClick: () => console.log('skill clicked'),
    shareWording: 'Share',
    shareText: 'Share this',
    shareSuccessWording: 'Success',
    shareErrorWording: 'Error',
    addToMyListButton: 'My list',
    favorite: true,
    onFavoriteClick: cb => cb(),
    addToMyListText: 'Added to your list',
    removeFromMyListText: 'Removed from your list'
  }
};
