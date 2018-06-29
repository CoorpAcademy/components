import catalog from '../../../../../organism/cards-grid/test/fixtures/catalog';
import card from '../../../../../molecule/card/test/fixtures/catalogue';
import searchForm from '../../../../../molecule/search-form/test/fixtures/default';

export default {
  props: {
    cta: {
      submitValue: 'Create'
    },
    teamsSlider: {
      value: 0.2,
      multi: false,
      onChange: () => console.log('onChange teamsSlider')
    },
    playersSlider: {
      value: 0.4,
      multi: false,
      onChange: () => console.log('onChange playersSlider')
    },
    searchForm: searchForm.props,
    selectedCard: card.props,
    cards: catalog.props
  }
};
