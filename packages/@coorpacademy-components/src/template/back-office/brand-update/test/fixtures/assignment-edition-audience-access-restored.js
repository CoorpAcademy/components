import warning from './assignment-edition-audience-access';

export default {
  props: {
    ...warning.props,
    header: {
      ...warning.props.header,
      warning: undefined,
      actionButtons: warning.props.header.actionButtons.map(button => ({
        ...button,
        disabled: false
      }))
    },
    content: {
      ...warning.props.content,
      audience: {
        ...warning.props.content.audience,
        individuals: {...warning.props.content.audience.individuals, selected: []},
        total: {label: '0 learners', detail: '0 learners (upload) + 0 learners (picked)'}
      },
      contents: {
        ...warning.props.content.contents,
        warning: undefined,
        actionButtons: [warning.props.content.contents.actionButtons[0]],
        list: {
          ...warning.props.content.contents.list,
          items: warning.props.content.contents.list.items.map(item => ({
            ...item,
            hidden: false,
            hint: undefined
          }))
        }
      }
    }
  }
};
