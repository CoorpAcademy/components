import card from '../../../../../molecule/card/test/fixtures/catalogue';

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
    selectedCard: card.props
  }
};
