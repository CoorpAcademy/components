import assignment from './assignment';

export default {
  props: {
    ...assignment.props,
    list: {
      ...assignment.props.list,
      items: assignment.props.list.items!.map((item, index) =>
        index === 0 ? {...item, hidden: true, checkbox: {...item.checkbox, checked: true}} : item
      )
    }
  }
};
