import ExpandibleActionableTable from '../../../../molecule/expandible-actionable-table/test/fixtures/dashboard-saved';

const {props: ExpandibleActionableTableProps} = ExpandibleActionableTable;

export default {
  props: {
    title: `${ExpandibleActionableTableProps.rows.length} massive imports`,
    buttonLink: {
      type: 'primary',
      label: 'Import files',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    content: {...ExpandibleActionableTableProps, type: 'expandible-actionable-table'}
  }
};
