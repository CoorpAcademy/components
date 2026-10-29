import {noop} from 'lodash/fp';
import assignment from './assignment-modules';
import defaultFixture from './default';

const props = {
  ...assignment.props,
  contentList: {
    ...assignment.props.contentList,
    title: '5 results',
    content: {
      ...assignment.props.contentList.content,
      items: [
        ...assignment.props.contentList.content.items,
        ...defaultFixture.props.contentList.content.items.slice(0, 4)
      ]
    },
    selectAll: {label: 'Select all 5', onClick: noop}
  }
};

export default {props};
