import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/default';
import disciplineCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/medias';

const {title, description, video} = disciplineHeader.props;
const {start, buy, startLabel, buyLabel} = disciplineCTA.props;
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
    video,
    authors: [],
    changeLevel: () => true,
    level: content,
    levels,
    shareWording: 'Share',
    shareText: 'Share this',
    shareSuccessWording: 'Success',
    shareErrorWording: 'Error',
    lastUpdated: 'Last update on 03/2023'
  }
};
