import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/default';
import disciplineRightAside from '../../../../../organism/discipline-rightaside/test/fixtures/discipline';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/medias';

const {title, description, video} = disciplineHeader.props;
const {start, buy, startLabel, buyLabel, authors} = disciplineRightAside.props;
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
