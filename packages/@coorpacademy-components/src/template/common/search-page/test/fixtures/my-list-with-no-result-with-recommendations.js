import filters from '../../../../../molecule/filters/test/fixtures/default';
import CardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/default';

const searchFilters = filters.props;
const recommendations = CardsList.props;

export default {
  props: {
    title: 'My list',
    searchFilters,
    clearFilters: {
      label: 'Explore content',
      onClick: () => console.log('clear all filter'),
      type: 'primary',
      icon: {
        position: 'left',
        faIcon: {
          name: 'compass',
          size: 16,
          color: 'white'
        }
      }
    },
    cards: {
      list: []
    },
    newVerion: true,
    noresultsfound: 'No content in your list',
    noresultsfoundDescription: 'Check out some content to add to your list and save it for later!',
    recommendations
  }
};
