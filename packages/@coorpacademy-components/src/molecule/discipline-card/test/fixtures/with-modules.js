export default {
  props: {
    discipline: {
      ref: 1,
      label: 'Digital',
      media: 'http://lorempixel.com/300/300/business',
      modules: [
        {
          ref: '0',
          label: 'foo',
          status: 'isActive'
        },
        {
          ref: '1',
          label: 'bar',
          status: 'isValid'
        },
        {
          ref: '2',
          label: 'baz',
          status: 'isStarted'
        }
      ]
    },
    onClick: () => null,
    onModuleClick: () => null
  }
};
