import checkbox from '../../../list-item/test/fixtures/checkbox';
import checkboxDeletable from '../../../list-item/test/fixtures/checkbox-deletable';
import searchProps from '../../../../atom/input-search/test/fixtures/coorpmanager';
import checkboxWithTitleProps from '../../../../atom/checkbox-with-title/test/fixtures/with-custom-icon';
import {COLORS} from '../../../../variables/colors';

const items = [
  {
    ...checkboxDeletable.props,
    id: '1'
  },
  {
    id: '2',
    title: 'Ensuring team cohesion ',
    subtitle: 'Coorpacademy',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
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
      checked: true,
      onChange: value => console.log(value)
    },
    secondButtonLink: checkboxDeletable.props.secondButtonLink
  },
  {
    ...checkbox.props,
    id: '3',
    secondButtonLink: checkboxDeletable.props.secondButtonLink
  }
];

export default {
  props: {
    checkboxWithTitle: {
      ...checkboxWithTitleProps.props,
      title: `<span style="color: #1D1D2B;">${
        items.length - 1
      }</span><span>&nbsp;</span>items selected`,
      customStyle: {...checkboxWithTitleProps.props.customStyle, paddingLeft: '16px'}
    },
    'aria-label': 'aria list',
    content: {items, type: 'list'},
    search: {...searchProps.props, placeholder: 'Search...'},
    actionButtons: [
      {
        label: 'Delete',
        type: 'secondary',
        onClick: () => console.log('click Save changes'),
        icon: {
          position: 'left',
          faIcon: {
            name: 'trash',
            color: COLORS.cm_grey_700,
            size: 14,
            customStyle: {padding: 0}
          }
        },
        customStyle: {
          fontWeight: '600',
          borderRadius: '12px',
          width: 'auto',
          paddingRight: '8px'
        }
      }
    ]
  }
};
