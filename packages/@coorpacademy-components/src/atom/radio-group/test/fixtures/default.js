const list = [
  {
    name: 'test',
    value: 'test1',
    checked: false,
    label: 'Microlearning'
  },
  {
    name: 'test',
    value: 'test2',
    checked: true,
    label: 'All'
  },
  {
    name: 'test',
    value: 'test3',
    checked: false,
    label: 'Courses'
  }
];

export default {
  props: {
    onChange: value => console.log(value),
    list
  }
};
