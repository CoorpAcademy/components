import Table from '../../../../molecule/table/test/fixtures/default';

const {rows, columns} = Table.props;

export default {
  props: {
    createHref: '#',
    search: {
      value: '',
      placeholder: '',
      onChange: () => {}
    },
    pagination: {
      value: '',
      nextHref: '#',
      previousHref: '#'
    },
    displayOptions: {
      value: '',
      values: ['', '', ''],
      onChange: () => {}
    },
    rows,
    columns
  }
};
