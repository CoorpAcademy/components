import {update, uniqueId, head} from 'lodash/fp';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/long-description';
import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/more-info';
import disciplineCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/medias';
import Thread from '../../../../../molecule/forum/forum-thread/test/fixtures/default';
import ThreadDeep from '../../../../../molecule/forum/forum-thread/test/fixtures/deep-answers';
import ForumComment from '../../../../../molecule/forum/forum-comment/test/fixtures/default';

const thread = Thread.props;
const thread2 = ThreadDeep.props;

const threads = [thread, thread2].map(update('id', () => uniqueId()));

const {title, description, video} = disciplineHeader.props;
const {start, buy, startLabel, buyLabel} = disciplineCTA.props;
const {authors} = disciplinePartners.props;
const {content, levels} = disciplineScope.props;

content.discussion = {
  ...ForumComment.props,
  title: 'Sandbox discussion',
  threads
};
export default {
  props: {
    selected: 2,
    start,
    buy,
    startLabel,
    buyLabel,
    title,
    description,
    video,
    authors: [head(authors)],
    changeLevel: () => true,
    level: content,
    levels,
    shareWording: 'Share',
    shareText: 'Share this',
    shareSuccessWording: 'Success',
    shareErrorWording: 'Error'
  }
};
