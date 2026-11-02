import Header from '../../../../../organism/header-with-actions/test/fixtures/assignment-tracking';
import Table from '../../../../../organism/brand-table/test/fixtures/assignment-learners';
import Panel from '../../../../../molecule/skills-chart-side-information-panel/test/fixtures/coorpmanager';
import {COLORS} from '../../../../../variables/colors';
import Shell from './list-items-assignment-without-scope';

const subTabs = [
  {title: 'Learners', href: '#learners', selected: true, status: '24'},
  {title: 'Removed', href: '#removed', selected: false, status: '2'}
];

export default {
  props: {
    ...Shell.props,
    header: {
      ...Header.props,
      type: 'header-with-actions',
      subtitle:
        '02–20 Nov 2026 · Created by jdoe on 02 Nov 2026 · Last edited by asmith 3 days ago · Last synced 22 Nov 2026'
    },
    notifications: [
      {
        type: 'warning',
        message:
          'Workplace safety essentials is unavailable. Edit the assignment to update its content.',
        cta: [{label: 'Edit assignment', action: () => {}}]
      }
    ],
    items: Shell.props.items.map(item => ({
      ...item,
      tabs: item.tabs?.map(tab => ({...tab, ...(tab.selected ? {subTabs} : {})}))
    })),
    summary: {
      bar: {
        title: '24 active learners',
        subtitle: '50% completed · 2 removed, outside the bar',
        ariaLabel: '24 active learners: 12 completed, 8 in progress, 4 not started',
        segments: [
          {value: 12, label: 'Completed', color: COLORS.cm_positive_500},
          {value: 8, label: 'In progress', color: COLORS.cm_primary_blue},
          {value: 4, label: 'Not started', color: COLORS.cm_grey_200}
        ]
      },
      tiles: Panel.props
    },
    content: {
      ...Table.props,
      type: 'list',
      rows: Table.props.rows.map((row, index) => ({
        ...row,
        fields: row.fields.map((field, fieldIndex) => {
          if (fieldIndex === 3) return '20 Nov 2026';
          if (fieldIndex === 4 && index === 2) return '19 Nov 2026';
          if (fieldIndex === 4 && index === 3) return {...field, text: '22 Nov 2026'};
          if (fieldIndex === 5 && index === 1) return '21 Nov 2026';
          return field;
        })
      }))
    }
  }
};
