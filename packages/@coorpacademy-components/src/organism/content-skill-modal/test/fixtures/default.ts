import ContentSkillListItems from '../../../list-items/test/fixtures/content-skill';
import MultiFilterPanel from '../../../../molecule/multi-filter-panel/test/fixtures/default';

const item = {
  title: 'Ensuring team cohesion',
  subtitle: 'Coorpacademy',
  image:
    'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=260&w=260&q=90',
  tags: [
    {
      label: 'Course',
      type: 'default',
      icon: {
        iconName: 'book-open',
        preset: 's',
        customStyle: {
          padding: 0
        },
        position: 'left'
      }
    }
  ],
  checkbox: {
    checked: false,
    onChange: (value: string) => console.log(value)
  }
};

const items = [
  ...ContentSkillListItems.props.content.items,
  {
    ...item,
    id: '4'
  },
  {
    ...item,
    id: '5'
  },
  {
    ...item,
    id: '6'
  }
];

export default {
  props: {
    contentList: {
      ...ContentSkillListItems.props,
      content: {
        ...ContentSkillListItems.props.content,
        items
      }
    },
    filters: MultiFilterPanel.props,
    modal: {
      isOpen: true,
      onCancel: () => {
        console.log('click on Cancel button');
      },
      onConfirm: () => {
        console.log('click on Add button');
      },
      onClose: () => {
        console.log('close the modal');
      }
    }
  }
};
