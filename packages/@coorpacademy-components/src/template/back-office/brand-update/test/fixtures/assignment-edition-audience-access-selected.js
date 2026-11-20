import warning from './assignment-edition-audience-access';

export default {
  props: {
    ...warning.props,
    content: {
      ...warning.props.content,
      contents: {
        ...warning.props.content.contents,
        actionButtons: warning.props.content.contents.actionButtons.map((button, index) =>
          index === 0 ? {...button, disabled: false} : button
        ),
        list: {
          ...warning.props.content.contents.list,
          items: warning.props.content.contents.list.items.map(item => ({
            ...item,
            checkbox: {...item.checkbox, checked: item.hidden}
          }))
        }
      }
    }
  }
};
