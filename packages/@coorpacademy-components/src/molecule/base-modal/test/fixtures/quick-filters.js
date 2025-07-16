import React from 'react';
import {COLORS} from '../../../../variables/colors';
import MultiFilterPanel from '../../../multi-filter-panel';
import quickFilters from '../../../multi-filter-panel/test/fixtures/quick-filters';

export default {
  props: {
    title: 'Filters',
    headerIcon: {
      name: 'sliders',
      backgroundColor: COLORS.primary_100,
      color: COLORS.cm_blue_700
    },
    detectScrollbar: true,
    children: <MultiFilterPanel {...quickFilters.props} />,
    isOpen: true,
    footer: {
      cancelButton: {
        onCancel: () => console.log('Clear search'),
        label: 'Clear',
        disabled: false
      },
      confirmButton: {
        onConfirm: () => console.log('show results'),
        label: 'Show 243 results',
        disabled: false,
        color: COLORS.cm_primary_blue
      }
    },
    onClose: () => console.log('close modal')
  }
};
