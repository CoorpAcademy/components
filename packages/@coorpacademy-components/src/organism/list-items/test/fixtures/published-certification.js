import publishedItem from '../../../list-item/test/fixtures/published';
import revisedItem from '../../../list-item/test/fixtures/revised';

const propsRevised = revisedItem.props;

const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const listePublishedItems = ids.map(id => {
  return {
    ...publishedItem.props,
    id
  };
});

export default {
  props: {
    title: `${listePublishedItems.length + 1} certifications`,
    'aria-label': 'aria list',
    buttonLink: {
      type: 'primary',
      label: 'Create certification',
      'aria-label': 'aria button',
      'data-name': 'default-button',
      onClick: () => console.log('click')
    },
    selectMultiple: {
      theme: 'coorpmanager',
      placeholder: 'Select language(s)',
      title: 'Population',
      description: 'You should select a language',
      disabled: false,
      error: '',
      options: [
        {
          value: 'pop-1',
          name: 'Capgemini',
          selected: true
        },
        {
          value: 'pop-2',
          name: 'Student',
          selected: false
        },
        {
          value: 'pop-3',
          name: 'Student Edhec',
          selected: false
        }
      ],
      onChange: value => console.log('onChange', value),
      onError: () => true
    },
    content: {items: [...listePublishedItems, propsRevised], type: 'list'}
  }
};
