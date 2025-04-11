import BrandFormGroup from '../../../../molecule/brand-form-group/test/fixtures/skill-edition';
import IconEditor from '../../../icon-editor/test/fixtures/empty-color';
import TitleAndInput from '../../../title-and-input/test/fixtures/icon-editor-and-title';
import {ContentPropsType, TranslationPropsType} from '../../types';

export const translationsEmptyProps: TranslationPropsType = {
  title: 'Translations',
  subtitle: 'Manage your translation to reach more learners',
  button: {
    label: 'Add translation',
    onClick: () => console.log('click on Add translations button')
  },
  localesOptions: [
    {ref: 'fr', label: '🇫🇷 French', onClick: () => console.log('click on fr')},
    {ref: 'es', label: '🇪🇸 Spanish', onClick: () => console.log('click on es')},
    {ref: 'it', label: '🇮🇹 Italian', onClick: () => console.log('click on it')},
    {ref: 'de', label: '🇩🇪 German', onClick: () => console.log('click on de')},
    {ref: 'ru', label: '🇷🇺 Russian', onClick: () => console.log('click on ru')},
    {ref: 'pl', label: '🇵🇱 Polish', onClick: () => console.log('click on pl')},
    {ref: 'tr', label: '🇹🇷 Turkish', onClick: () => console.log('click on tr')}
  ],
  emptyResult: {
    title: 'No translations for this skill yet',
    description: 'No translations for this skill yet. Click ‘Add translation’ to get started.'
  }
};

export const contentEmptyProps: ContentPropsType = {
  title: 'Content',
  subtitle: 'Add or remove content from this skill',
  button: {
    label: 'Add content',
    onClick: () => console.log('Add content')
  },
  list: {
    title: '0 item',
    emptyResult: {
      title: 'No content associated with this skill',
      description:
        'Start adding valuable resources to help learners build their knowledge and expertise!'
    },
    search: {
      value: '',
      placeholder: 'Search',
      onChange: (value: string) => {
        console.log(value);
      }
    }
  }
};

export default {
  props: {
    skillInformations: {
      form: BrandFormGroup.props,
      iconEditor: {...TitleAndInput.props, field: {...IconEditor.props, size: 'large', title: '-'}}
    },
    translations: translationsEmptyProps,
    content: contentEmptyProps
  }
};
