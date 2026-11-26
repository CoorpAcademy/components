import {noop} from 'lodash/fp';
import {makeListModel, listLabels, rows} from '../../../../test/helpers/population-list';

export default {
  props: {
    model: makeListModel({
      rows: [
        {
          ...rows[4],
          ownerInformation: {
            label: '2 owners',
            ariaLabel: 'Owners of Onboarding progress',
            items: rows[4].ownerInformation ? rows[4].ownerInformation.items : [],
            loading: true,
            error: {
              message: 'Owners could not be refreshed.',
              retry: {label: 'Retry owners', onClick: noop}
            }
          }
        },
        {
          ...rows[0],
          cataloguePlaylists: {
            label: '2 catalogue playlists',
            ariaLabel: 'Catalogue playlists for Finance',
            items: rows[0].cataloguePlaylists ? rows[0].cataloguePlaylists.items : [],
            loading: true,
            error: {
              message: 'Playlists could not be refreshed.',
              retry: {label: 'Retry playlists', onClick: noop}
            }
          }
        }
      ]
    }),
    labels: listLabels
  }
};
