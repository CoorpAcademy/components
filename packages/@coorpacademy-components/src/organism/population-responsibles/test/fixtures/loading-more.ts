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
      loadingMore: true,
      loadMore: {label: 'Load more', onClick: () => undefined}
    }),
    labels: responsibleLabels
  }
};
