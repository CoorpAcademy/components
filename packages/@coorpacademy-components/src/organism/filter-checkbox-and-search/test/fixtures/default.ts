import {FilterCheckboxAndSearchProps} from '../../props-types';

const defaultFilterCheckboxFixtures: {props: FilterCheckboxAndSearchProps} = {
  props: {
    title: 'Skills',
    onClear: () => {
      console.log('clear filters');
    },
    searchOptions: {
      placeholder: 'Search for a skill',
      value: '',
      onChange: () => {
        console.log('onChange search');
      }
    },
    options: [
      {
        label: 'Active listening',
        value: 'active-listening',
        selected: false,
        ref: 'skill_94',
        count: 104,
        onClick: () => {
          console.log('active listening selected');
        }
      },
      {
        label: 'Resilience and wellbeing',
        value: 'resilience-and-wellbeing',
        selected: false,
        ref: 'skill_95',
        count: 184,
        onClick: () => {
          console.log('Resilience and wellbeing selected');
        }
      },
      {
        label: 'Agility',
        value: 'agility',
        selected: false,
        ref: 'skill_96',
        count: 234,
        onClick: () => {
          console.log('Agility selected');
        }
      },
      {
        label: 'Analytical and Critical Thinking',
        value: 'analytical-and-critical-thinking',
        selected: false,
        ref: 'skill_97',
        count: 75,
        onClick: () => {
          console.log('Analytical and Critical Thinking selected');
        }
      }
    ]
  }
};

export default defaultFilterCheckboxFixtures;
