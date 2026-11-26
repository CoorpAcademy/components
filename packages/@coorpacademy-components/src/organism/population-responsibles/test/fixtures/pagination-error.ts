import {
  makeModel,
  responsibleLabels,
  managerPages
} from '../../../../test/helpers/population-responsibles';

export default {
  props: {
    model: makeModel({
      users: managerPages.slice(0, 25),
      countLabel: '25 of 62 managers',
      loadMore: {label: 'Load more', onClick: () => undefined},
      error: {
        message: 'The next managers could not be loaded. Your current list is kept.',
        retry: {label: 'Try again', onClick: () => undefined}
      }
    }),
    labels: responsibleLabels
  }
};
