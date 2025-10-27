import {FilterCheckboxAndSearchProps} from '../../props-types';
import defaultProps from './default';

const filterCheckboxSelected: {props: FilterCheckboxAndSearchProps} = {
  props: {
    ...defaultProps.props,
    id: 'skills-filter',
    options: [
      {
        ...defaultProps.props.options[0],
        selected: true
      },
      {
        label: 'Conflict Management',
        value: 'conflict-management',
        selected: true,
        ref: 'skill_98',
        count: 140,
        onClick: () => {
          console.log('Conflict Management selected');
        }
      },
      {
        label: 'Creativity and Innovation',
        value: 'creativity-and-innovation',
        selected: false,
        ref: 'skill_99',
        count: 184,
        onClick: () => {
          console.log('Creativity and Innovation selected');
        }
      },
      {
        label: 'Cultural Sensitivity, Diversity and Inclusion',
        value: 'cultural-sensitivity-diversity-and-inclusion',
        selected: true,
        ref: 'skill_100',
        count: 153,
        onClick: () => {
          console.log('Cultural Sensitivity, Diversity and Inclusion selected');
        }
      },
      {
        label: 'Data-drivenness and AI',
        value: 'data-drivenness-and-ai',
        selected: false,
        ref: 'skill_102',
        count: 234,
        onClick: () => {
          console.log('Data-drivenness and AI selected');
        }
      },
      {
        label: 'Digital Awareness',
        value: 'digital-awareness',
        selected: false,
        ref: 'skill_103',
        count: 132,
        onClick: () => {
          console.log('Digital Awareness selected');
        }
      },
      {
        label: 'Digital Analytical Thinking',
        value: 'digital-analytical-thinking',
        selected: false,
        ref: 'skill_104',
        count: 145,
        onClick: () => {
          console.log('Digital Analytical Thinking selected');
        }
      },
      {
        label: 'Digital Communication',
        value: 'digital-communication',
        selected: false,
        ref: 'skill_105',
        count: 145,
        onClick: () => {
          console.log('Digital Communication selected');
        }
      },
      {
        label: 'Digital Dexterity',
        value: 'digital-dexterity',
        selected: false,
        ref: 'skill_106',
        count: 145,
        onClick: () => {
          console.log('Digital Dexterity selected');
        }
      },
      {
        label: 'Digital Learning',
        value: 'digital-learning',
        selected: false,
        ref: 'skill_107',
        count: 145,
        onClick: () => {
          console.log('Digital Learning selected');
        }
      },
      {
        label: 'Digital',
        value: 'digital',
        selected: false,
        ref: 'skill_108',
        count: 145,
        onClick: () => {
          console.log('Digital selected');
        }
      }
    ]
  }
};
export default filterCheckboxSelected;
