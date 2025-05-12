import IconEditor from '../../../icon-editor/test/fixtures/empty-color';
import SelectAndTitle from '../../../title-and-input/test/fixtures/select-and-title';
import {COLORS} from '../../../../variables/colors';
import {TranslationPropsType, ContentPropsType} from '../../types';

export const translationsEmptyProps: TranslationPropsType = {
  title: 'Translations',
  subtitle: 'Manage your translation to reach more learners',
  button: {
    label: 'Add translation',
    onClick: () => console.log('click on Add translations button'),
    disabled: true
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
  items: {},
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
      form: {
        title: 'Skill informations',
        subtitle:
          'Provide key details about the skill, including its name, description and its icon',
        select: {
          title: 'Default language',
          subtitle: 'Language in which the skill is created',
          'data-name': 'Default language',
          field: {
            options: SelectAndTitle.props.field.options,
            'aria-label': 'Select a language',
            onChange: (value: string) => console.log(value),
            value: 'en'
          }
        },
        inputText: {
          title: 'Title',
          field: {
            title: 'Skill name',
            placeholder: 'Skill name',
            hint: '0/80 characters',
            description: 'Skill name',
            value: '',
            onChange: (value: string) => console.log(value)
          }
        },
        inputTextArea: {
          title: 'Description',
          field: {
            title: 'Description',
            placeholder: 'What is the skill about, what are the takeaways...',
            hint: '0/400 characters',
            description: 'Description',
            value: '',
            onChange: (value: string) => console.log(value)
          }
        }
      },
      iconEditor: {
        title: 'Skill icon',
        iconPreview: {title: '-', icon: {color: COLORS.cm_blue_700, name: 'globe-pointer'}},
        inputText: {...IconEditor.props.inputText},
        buttonLink: {
          label: 'Change icon',
          ariaLabel: 'aria button',
          onClick: () => console.log('click on "Change icon" button')
        }
      }
    },
    translations: translationsEmptyProps,
    content: contentEmptyProps
  }
};
