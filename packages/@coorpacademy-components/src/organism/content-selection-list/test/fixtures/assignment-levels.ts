import {ContentPropsType} from '../../types';
import {contentData} from '../../../skill-edition/test/fixtures/draft';
import assignment from './assignment';

const levels = ['base', 'advanced', 'coach'] as const;
const props: ContentPropsType = {
  ...assignment.props,
  checkboxWithTitle: {...assignment.props.checkboxWithTitle, title: '3 items'},
  list: {
    ...assignment.props.list,
    items: levels.map(level => ({
      ...contentData[0],
      ref: `module_${level}`,
      title: 'Cloud computing fundamentals',
      tags: {label: level, iconName: 'book', level}
    }))
  }
};

export default {props};
