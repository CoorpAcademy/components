import __ from 'lodash/fp/__';
import mapValues from 'lodash/fp/mapValues';
import pipe from 'lodash/fp/pipe';

// eslint-disable-next-line import/prefer-default-export
export const createLandingStateToProps = (options, store) => state => {
  return {
    team: {
      name: 'Les canards mauves',
      color: 'purple'
    }
  }
};
