import omit from 'lodash/fp/omit';
import Header from '../../../../../organism/header-with-actions/test/fixtures/assignment-tracking';
import Table from '../../../../../organism/brand-table/test/fixtures/assignment-learners';
import Panel from '../../../../../molecule/skills-chart-side-information-panel/test/fixtures/coorpmanager';
import Shell from './list-items-assignment-without-scope';

const subTabs = [
  {title: 'Learners', href: '#learners', selected: true, status: '24'},
  {title: 'Removed', href: '#removed', selected: false, status: '2'}
];
const tones = ['completed', 'inProgress', 'assigned', 'dueSoon', 'overdue'];
const icons = ['circle-check', 'spinner', 'hourglass-start', 'clock', 'triangle-exclamation'];

export default {
  props: {
    ...Shell.props,
    header: {
      // No breadcrumb on the tracking header: the close button goes back to the list (spec A1.17).
      ...omit('breadcrumbs', Header.props),
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
      tabs: item.tabs?.map(tab => ({
        ...tab,
        ...(tab.selected ? {subTabs} : {})
      }))
    })),
    summary: {
      bar: {
        title: '24 active learners',
        subtitle: '50% completed · 2 removed, outside the bar',
        ariaLabel: '24 active learners: 12 completed, 8 in progress, 4 not started',
        segments: [
          {value: 12, label: 'Completed', color: '#7BCB8A'},
          {value: 8, label: 'In progress', color: '#E9A23B'},
          {value: 4, label: 'Not started', color: '#D3D7DF'}
        ]
      },
      tiles: {
        ...Panel.props,
        sidePanelItems: Panel.props.sidePanelItems.map((item, index) => ({
          ...item,
          tone: tones[index],
          icon: {iconName: icons[index]},
          ...(index >= 3 && {value: '1'})
        }))
      }
    },
    content: {
      ...Table.props,
      type: 'list',
      rows: Table.props.rows.map((row, index) => ({
        ...row,
        fields: row.fields.map((field, fieldIndex) => {
          if (fieldIndex === 1)
            return {
              ...field,
              tags: [
                ...field.tags.map(tag => ({...tag, palette: 'tracking'})),
                ...(index === 0
                  ? [
                      {
                        status: 'dueSoon',
                        label: 'Due soon',
                        palette: 'tracking'
                      }
                    ]
                  : [])
              ]
            };
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
