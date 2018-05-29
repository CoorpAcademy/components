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
    checked: false,
    label: 'All'
  },
  {
    name: 'test',
    value: 'test3',
    checked: true,
    label: 'Courses'
  }
];

export default {
  props: {
    onChange: value => console.log(value),
    color: '#f0f',
    list
  }
};
