import disciplineCTA from '../../../../molecule/discipline-cta/test/fixtures/default';

const {start, buy, startLabel, buyLabel} = disciplineCTA.props;

export default {
  props: {
    type: 'discipline',
    start,
    buy,
    startLabel,
    buyLabel,
    authors: []
  }
};
