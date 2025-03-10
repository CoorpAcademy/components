export default {
  props: {
    title: 'Skills',
    type: 'checkbox',
    placeholder: 'Search for a skill',
    onClearFilters: () => {
      console.log('clear filters');
    },
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
      }
    ]
  }
};
