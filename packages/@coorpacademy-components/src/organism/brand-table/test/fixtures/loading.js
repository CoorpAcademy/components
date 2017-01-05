import Table from '../../../../molecule/table/test/fixtures/default';

const {rows, columns} = Table.props;

export default {
  props: {
    createHref: '#',
    search: {
      value: '',
      placeholder: 'Name, last name…',
      onChange: () => {}
    },
    pagination: {
      value: '1-10 on 50',
      nextHref: '#',
      previousHref: '#'
    },
    emptyValue: 'There is nothing to display.',
    isPending: true,
    rows,
    columns
  }
};
