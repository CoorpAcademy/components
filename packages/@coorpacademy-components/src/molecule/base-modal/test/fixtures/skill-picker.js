import React from 'react';
import Chip from '../../../../atom/chip';

const skills = [
  {
    text: 'Creativity and innovation',
    selected: false,
    onClick: () => console.log('click on skill 1')
  },
  {
    text: 'Critical thinking and analysis',
    selected: true,
    onClick: () => console.log('click on skill 2')
  },
  {
    text: 'Digital culture',
    selected: false,
    onClick: () => console.log('click on skill 3')
  },
  {
    text: 'Digital dexterity',
    selected: false,
    onClick: () => console.log('click on skill 4')
  },
  {
    text: 'Digital communication',
    selected: false,
    onClick: () => console.log('click on skill 5')
  },
  {
    text: 'Active listening',
    selected: false,
    onClick: () => console.log('click on skill 6')
  },
  {
    text: 'Agility',
    selected: false,
    onClick: () => console.log('click on skill 7')
  },
  {
    text: 'Learning how to learn',
    selected: false,
    onClick: () => console.log('click on skill 8')
  }
];

const SkillPicker = () => (
  <>
    <div style={{marginBottom: '16px'}}>7 selected</div>
    <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
      {skills.map((skill, index) => (
        <Chip {...skill} key={index} />
      ))}
    </div>
  </>
);

export default {
  props: {
    title: 'Skill focus',
    headerIcon: {
      name: 'bullseye-arrow',
      backgroundColor: '#DDD1FF'
    },
    description:
      'Choose between 3 to 6 skills you are interested in. Your are able to change focus at any time.',
    children: <SkillPicker />,
    isOpen: true,
    footerDescription: {
      text: 'Select at least 3 more skills',
      isError: false
    },
    cancelButton: {
      onCancel: () => console.log('cancel'),
      label: 'Cancel',
      disabled: false
    },
    confirmButton: {
      onConfirm: () => console.log('confirm'),
      label: 'Confirm',
      iconName: 'compass',
      disabled: false
    },
    onClose: () => console.log('close modal')
  }
};
