import TitleAndAutocomplete from '../../../../organism/title-and-input/test/fixtures/autocomplete-and-title';
import TitleAndSelectOpponents from '../../../../organism/title-and-input/test/fixtures/select-opponents-and-title';

export default {
  props: {
    title: 'Massive Battle',
    fields: [
      {
        ...TitleAndAutocomplete.props,
        type: 'titleAndInput'
      },
      {
        ...TitleAndSelectOpponents.props,
        type: 'titleAndInput'
      },
      {
        type: 'titleAndInput',
        title: {
          type: 'form-group',
          title: '3. Course',
          subtitle: 'Choose one course to challenge your colleagues on'
        },
        field: {
          ...TitleAndAutocomplete.props.field,
          title: 'Choose a course'
        },
        childType: 'autoComplete'
      },
      {
        type: 'titleAndInput',
        title: {
          title: '4. Difficulty level',
          type: 'form-group',
          subtitle: 'Level of difficulty (if it is easy, the population is more likely to win)'
        },
        field: {
          title: 'Difficulty level',
          description: 'Level of difficulty (if it is easy, the population is more likely to win)',
          required: true,
          multiple: false,
          theme: 'coorpmanager',
          options: [
            {
              value: '0.2',
              name: 'Easy (20% of well answered questions)',
              selected: true
            },
            {
              value: '0.5',
              name: 'Average (50% of well answered questions)',
              selected: false
            },
            {
              value: '0.8',
              name: 'Hard (80% of well answered questions)',
              selected: false
            }
          ],
          onChange: value => console.log('onChange', value),
          onError: () => true
        },
        childType: 'selectMultiple'
      }
    ]
  }
};
