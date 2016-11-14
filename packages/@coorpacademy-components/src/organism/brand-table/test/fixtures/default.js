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
      value: '1-10 on 50',
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
