import React from 'react';
import {COLORS} from '../../../../variables/colors';
import MultiFilterPanel from '../../../multi-filter-panel';
import quickFilters from '../../../multi-filter-panel/test/fixtures/quick-filters';

const ChildComponentFixture = () => <MultiFilterPanel {...quickFilters.props} />; // isolate props for testing

export default {
  props: {
    title: 'Filters',
    titleAriaLabel: 'Display the filters',
    headerIcon: {
      name: 'sliders',
      backgroundColor: COLORS.primary_100,
      color: COLORS.cm_blue_700
    },
    children: <ChildComponentFixture />,
    isOpen: true,
    footer: {
      cancelButton: {
        onCancel: () => console.log('Clear search'),
        label: 'Clear',
        disabled: false
      },
      confirmButton: {
        onConfirm: () => console.log('show results'),
        label: 'No results with selected filters',
        disabled: true
      }
    },
    onClose: () => console.log('close modal'),
    detectScrollbar: true,
    customStyle: {
      width: '660px',
      maxWidth: '660px',
      maxHeight: '90vh'
    }
  }
};
