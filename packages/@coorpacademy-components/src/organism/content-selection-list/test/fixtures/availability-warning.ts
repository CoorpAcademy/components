import {noop} from 'lodash/fp';
import assignment from './assignment';

export default {
  props: {
    ...assignment.props,
    hiddenLabel: 'Unavailable',
    warning:
      "1 content item isn't available to everyone in the current audience. Adding learners or populations can affect access to content. Remove this item from the assignment or adjust the audience before publishing.",
    actionButtons: [
      ...(assignment.props.actionButtons || []),
      {label: 'Select unavailable content (1)', onClick: noop}
    ],
    list: {
      ...assignment.props.list,
      items: (assignment.props.list.items || []).map((item, index) =>
        index === 0
          ? {
              ...item,
              hidden: true,
              hint: "1 learner in the current audience can't access this content."
            }
          : item
      )
    }
  }
};
