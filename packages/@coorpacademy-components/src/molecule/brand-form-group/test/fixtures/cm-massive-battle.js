import TitleAndAutocomplete from '../../../../organism/title-and-input/test/fixtures/autocomplete-and-title';
import TitleAndSelectOpponents from '../../../../organism/title-and-input/test/fixtures/select-opponents-and-title';
import TitleAndSelectMultiple from '../../../../organism/title-and-input/test/fixtures/select-multiple-and-title';

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
        ...TitleAndSelectMultiple.props,
        type: 'titleAndInput'
      }
    ]
  }
};
