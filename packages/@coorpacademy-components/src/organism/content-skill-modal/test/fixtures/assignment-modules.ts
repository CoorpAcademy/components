import defaultFixture from './default';

const COHESION_IMAGE =
  'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90';
const CONFLICT_IMAGE =
  'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-marmiton/cockpit-marmiton/cover/shutterstock_520965634-1491986518210.jpg&h=500&w=500&q=90';

const moduleTag = {
  label: 'Module',
  type: 'default',
  icon: {
    iconName: 'book-open',
    preset: 's',
    customStyle: {padding: 0},
    position: 'left'
  }
};

const moduleRow = ({
  id,
  title,
  image,
  level,
  levelLabel,
  checked = false
}: {
  id: string;
  title: string;
  image: string;
  level: string;
  levelLabel: string;
  checked?: boolean;
}) => ({
  id,
  title,
  subtitle: 'Coorpacademy',
  image,
  tags: [moduleTag],
  contentBadge: {category: level, label: levelLabel},
  checkbox: {
    checked,
    onChange: (value: boolean) => console.log(value),
    'aria-label': `${title} · ${levelLabel}`
  }
});

const cohesion = 'Ensuring team cohesion and well-being';

const props = {
  ...defaultFixture.props,
  modal: {
    ...defaultFixture.props.modal,
    title: 'Assign content',
    description: 'Select the modules to include in this assignment',
    cancelLabel: 'Cancel assignment',
    confirmLabel: 'Assign'
  },
  contentList: {
    ...defaultFixture.props.contentList,
    checkboxWithTitle: {
      ...defaultFixture.props.contentList.checkboxWithTitle,
      title: '<span style="color: #1D1D2B;">1</span><span>&nbsp;</span>module selected'
    },
    content: {
      ...defaultFixture.props.contentList.content,
      items: [
        moduleRow({
          id: 'cohesion-base',
          title: cohesion,
          image: COHESION_IMAGE,
          level: 'base',
          levelLabel: 'Base',
          checked: true
        }),
        moduleRow({
          id: 'cohesion-advanced',
          title: cohesion,
          image: COHESION_IMAGE,
          level: 'advanced',
          levelLabel: 'Advanced'
        }),
        moduleRow({
          id: 'cohesion-coach',
          title: cohesion,
          image: COHESION_IMAGE,
          level: 'coach',
          levelLabel: 'Coach'
        }),
        {
          ...moduleRow({
            id: 'conflict-base',
            title: 'Managing conflict in a team',
            image: CONFLICT_IMAGE,
            level: 'base',
            levelLabel: 'Base'
          }),
          imageOverlay: 'hidden',
          contentBadge: {category: 'hidden', label: 'Hidden'}
        }
      ]
    }
  }
};

export default {props};
