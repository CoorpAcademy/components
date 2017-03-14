import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/default';
import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/default';
import disciplineCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/medias';

const {title, description, video} = disciplineHeader.props;
const {start, buy, startLabel, buyLabel} = disciplineCTA.props;
const {authors} = disciplinePartners.props;
const {content, levels} = disciplineScope.props;

/* eslint-disable max-len */

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
    authors,
    changeLevel: () => true,
    level: content,
    levels
  }
};
