import {noop} from 'lodash/fp';
import assignment from './assignment-modules';

const chapterTitle = 'Active listening in 5 minutes';

const props = {
  ...assignment.props,
  contentList: {
    ...assignment.props.contentList,
    content: {
      ...assignment.props.contentList.content,
      items: [
        ...assignment.props.contentList.content.items,
        {
          id: 'active-listening',
          title: chapterTitle,
          subtitle: 'Coorpacademy',
          image:
            'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
          tags: [
            {
              label: "5' learning",
              type: 'default',
              icon: {
                iconName: 'stopwatch',
                preset: 's',
                customStyle: {padding: 0},
                position: 'left'
              }
            }
          ],
          checkbox: {
            checked: false,
            onChange: (value: boolean) => console.log(value),
            'aria-label': chapterTitle
          }
        }
      ]
    },
    selectAll: {label: 'Select all 5', onClick: noop}
  }
};

export default {props};
