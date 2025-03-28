import lisItemPublishedProps from '../../../list-item/test/fixtures/custom-skill';
import searchProps from '../../../../atom/input-search/test/fixtures/coorpmanager';

const {props: lisItemProps} = lisItemPublishedProps;

const items = [
  lisItemProps,
  {
    ...lisItemProps,
    'data-name': 'list-item-2',
    id: '2',
    title: 'Conflict management',
    leftIcon: {
      ...lisItemProps.leftIcon,
      iconName: 'person-burst',
      iconColor: '#A32700'
    }
  },
  {
    ...lisItemProps,
    'data-name': 'list-item-3',
    id: '3',
    title: 'Team management',
    leftIcon: {
      ...lisItemProps.leftIcon,
      iconName: 'people-group',
      iconColor: '#139176'
    }
  },
  {
    ...lisItemProps,
    'data-name': 'list-item-4',
    id: '4',
    title: 'Agility',
    leftIcon: {
      ...lisItemProps.leftIcon,
      iconName: 'arrows-split-up-and-left',
      iconColor: '#0042AD'
    }
  },
  {
    ...lisItemProps,
    'data-name': 'list-item-5',
    id: '5',
    title: 'Active listening',
    leftIcon: {
      ...lisItemProps.leftIcon,

      iconName: 'ear-listen',
      iconColor: '#A32700'
    },
    buttonLink: {
      ...lisItemProps.buttonLink,
      'aria-label': 'Edit',
      icon: {
        position: 'left',
        faIcon: {
          name: 'edit',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('click')
    },
    provider: {
      label: 'Custom',
      type: 'default'
    }
  }
];

export default {
  props: {
    title: `${items.length + 1} Skills`,
    'aria-label': 'aria list',
    selectMultiple: {
      theme: 'coorpmanager',
      placeholder: 'Select language(s)',
      title: '',
      description: 'You should select a provider',
      disabled: false,
      error: '',
      options: [
        {
          value: '',
          name: 'All providers',
          selected: true
        },
        {
          value: '',
          name: 'Custom',
          selected: false
        },
        {
          value: '',
          name: 'Coorpacademy',
          selected: false
        }
      ],
      onChange: value => console.log('onChange', value),
      onError: () => true
    },
    content: {
      items,
      type: 'list',
      itemType: 'custom-skill',
      isDraggable: false
    },
    search: {...searchProps.props, placeholder: 'Search...'}
  }
};
