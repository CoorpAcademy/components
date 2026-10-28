import assignment from './assignment';

export default {
  props: {
    ...assignment.props,
    list: {
      ...assignment.props.list,
      items: assignment.props.list.items!.map((item, index) =>
        index === 0 ? {...item, hint: "3 of the listed learners can't see it"} : item
      )
    }
  }
};
