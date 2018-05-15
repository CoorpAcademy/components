const list = [
  {
    name: 'test',
    value: 'test1',
    selected: false,
    label: 'micro',
    onChange: e => console.log(e)
  },
  {
    name: 'test',
    value: 'test2',
    selected: true,
    label: 'all',
    onChange: e => console.log(e)
  },
  {
    name: 'test',
    value: 'test3',
    selected: false,
    label: 'courses',
    onChange: e => console.log(e)
  }
];

export default {
  props: {
    listprops: list
  }
};
