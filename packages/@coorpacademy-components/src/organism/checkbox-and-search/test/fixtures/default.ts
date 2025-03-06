export default {
  props: {
    title: {
      type: 'form-group',
      title: 'Skills',
      titleSize: 'small'
    },
    tag: {
      label: '10',
      type: 'success',
      size: 'S'
    },
    onClearFilters: () => {
      console.log('clear filters');
    },
    type: 'checkbox',
    withSearch: true,
    options: [
      {
        label: 'Active listening',
        value: 'active-listening',
        selected: true,
        skillRef: 'cskill_94',
        count: 10,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Resilience and wellbeing',
        value: 'resilience-and-wellbeing',
        selected: false,
        skillRef: 'cskill_95',
        count: 10,
        onClick: () => {
          console.log('Resilience and wellbeing selected');
        }
      },
      {
        label: 'Agility',
        value: 'agility',
        selected: false,
        skillRef: 'cskill_96',
        count: 10,
        onClick: () => {
          console.log('Agility selected');
        }
      },
      {
        label: 'Analytical and Critical Thinking',
        value: 'analytical-and-critical-thinking',
        selected: false,
        skillRef: 'cskill_97',
        count: 10,
        onClick: () => {
          console.log('Analytical and Critical Thinking selected');
        }
      },
      {
        label: 'Conflict Management',
        value: 'conflict-management',
        selected: false,
        skillRef: 'cskill_98',
        count: 10,
        onClick: () => {
          console.log('Conflict Management selected');
        }
      },
      {
        label: 'Creativity and Innovation',
        value: 'creativity-and-innovation',
        selected: false,
        skillRef: 'cskill_99',
        count: 10,
        onClick: () => {
          console.log('Creativity and Innovation selected');
        }
      },
      {
        label: 'Cultural Sensitivity, Diversity and Inclusion',
        value: 'cultural-sensitivity-diversity-and-inclusion',
        selected: false,
        skillRef: 'cskill_100',
        count: 10,
        onClick: () => {
          console.log('Cultural Sensitivity, Diversity and Inclusion selected');
        }
      },
      {
        label: 'Data-drivenness and AI',
        value: 'data-drivenness-and-ai',
        selected: false,
        skillRef: 'cskill_102',
        count: 10,
        onClick: () => {
          console.log('Data-drivenness and AI selected');
        }
      }
    ]
  }
};
