import {FilterCheckboxAndSearchProps} from '../../props-types';

const emptySearchSkillFixture: {props: FilterCheckboxAndSearchProps} = {
  props: {
    title: 'Skills',
    onClear: () => {
      console.log('clear filters');
    },
    searchOptions: {
      placeholder: 'Search for a skill',
      value: 'qdfqff',
      onChange: () => {
        console.log('onChange search');
      }
    },
    options: []
  }
};

export default emptySearchSkillFixture;
