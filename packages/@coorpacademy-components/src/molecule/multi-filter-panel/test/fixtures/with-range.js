export default {
  props: {
    title: 'Filters',
    onClearAll: () => console.log('onClearAll'),
    onRemoveSelectedFilter: label => console.log('onRemoveSelectedFilter', label),
    options: [
      {
        type: 'range',
        options: {
          title: 'Duration',
          titleAriaLabel: 'Duration filter',
          onClear: () => console.log('onClear duration'),
          options: {
            label: 'Duration: 20-80 min',
            min: 0,
            max: 120,
            step: 1,
            value: [20, 80],
            minLabel: 'Min',
            maxLabel: 'Max',
            maxValueLabel: '120+',
            minValueLabel: '0-',
            onChange: value => console.log('onChange duration', value),
            theme: 'mooc',
            selected: true
          }
        }
      },
      {
        type: 'chip',
        options: {
          title: 'Skills',
          titleAriaLabel: 'Skills filter',
          onClear: () => console.log('onClear skills'),
          options: [
            {
              label: 'JavaScript',
              type: 'javascript',
              selected: true,
              onClick: type => console.log('onClick', type)
            },
            {
              label: 'React',
              type: 'react',
              selected: false,
              onClick: type => console.log('onClick', type)
            }
          ]
        }
      }
    ]
  }
};
