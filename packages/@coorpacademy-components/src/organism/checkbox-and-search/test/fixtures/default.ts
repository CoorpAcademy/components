export default {
  props: {
    title: 'Skills',
    onClearFilters: () => {
      console.log('clear filters');
    },
    type: 'checkbox',
    withSearch: true,
    options: [
      {
        label: 'Active listening',
        value: 'active-listening',
        selected: false,
        skillRef: 'skill_94',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Resilience and wellbeing',
        value: 'resilience-and-wellbeing',
        selected: false,
        skillRef: 'skill_95',
        count: 184,
        onClick: () => {
          console.log('Resilience and wellbeing selected');
        }
      },
      {
        label: 'Agility',
        value: 'agility',
        selected: false,
        skillRef: 'skill_96',
        count: 234,
        onClick: () => {
          console.log('Agility selected');
        }
      },
      {
        label: 'Analytical and Critical Thinking',
        value: 'analytical-and-critical-thinking',
        selected: false,
        skillRef: 'skill_97',
        count: 75,
        onClick: () => {
          console.log('Analytical and Critical Thinking selected');
        }
      },
      {
        label: 'Conflict Management',
        value: 'conflict-management',
        selected: false,
        skillRef: 'skill_98',
        count: 140,
        onClick: () => {
          console.log('Conflict Management selected');
        }
      },
      {
        label: 'Creativity and Innovation',
        value: 'creativity-and-innovation',
        selected: false,
        skillRef: 'skill_99',
        count: 184,
        onClick: () => {
          console.log('Creativity and Innovation selected');
        }
      },
      {
        label: 'Cultural Sensitivity, Diversity and Inclusion',
        value: 'cultural-sensitivity-diversity-and-inclusion',
        selected: false,
        skillRef: 'skill_100',
        count: 153,
        onClick: () => {
          console.log('Cultural Sensitivity, Diversity and Inclusion selected');
        }
      },
      {
        label: 'Data-drivenness and AI',
        value: 'data-drivenness-and-ai',
        selected: false,
        skillRef: 'skill_102',
        count: 234,
        onClick: () => {
          console.log('Data-drivenness and AI selected');
        }
      }
    ]
  }
};
