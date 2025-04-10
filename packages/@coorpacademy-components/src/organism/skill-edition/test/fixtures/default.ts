import BrandFormGroup from '../../../../molecule/brand-form-group/test/fixtures/skill-edition';
import ButtonMenuActionStyle from '../../../../molecule/button-menu-action/test/fixtures/default';
import ContentSkillEmpty from '../../../list-items/test/fixtures/content-skill-empty';
import IconEditor from '../../../icon-editor/test/fixtures/empty-color';
import TitleAndInput from '../../../title-and-input/test/fixtures/icon-editor-and-title';
import {COLORS} from '../../../../variables/colors';
import {TranslationPropsType} from '../../types';

const contentButtonProps = {
  type: 'primary',
  label: 'Add content',
  'aria-label': 'aria button',
  'data-name': 'default-button',
  onClick: () => console.log('Add content')
};

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

export default {
  props: {
    skillInformations: {
      form: BrandFormGroup.props,
      iconEditor: {...TitleAndInput.props, field: {...IconEditor.props, size: 'large', title: '-'}}
    },
    translations: translationsEmptyProps,
    content: {
      title: {
        type: 'form-group',
        title: 'Content',
        subtitle: 'Add or remove content from this skill',
        titleSize: 'xl-strong',
        subtitleSize: 'medium',
        button: {
          ...contentButtonProps,
          icon: ButtonMenuActionStyle?.props?.button?.icon || {},
          customStyle: ButtonMenuActionStyle?.props?.button?.customStyle || {}
        },
        required: true
      },
      listContent: {
        ...ContentSkillEmpty.props,
        content: {
          items: [],
          type: 'list',
          emptyResult: {
            title: 'No content associated with this skill',
            description:
              'Start adding valuable resources to help learners build their knowledge and expertise!',
            button: {
              ...contentButtonProps,
              icon: {
                position: 'left',
                faIcon: {
                  name: 'plus',
                  color: COLORS.white,
                  customStyle: {padding: 0},
                  size: 14
                }
              },
              customStyle: {
                borderRadius: '12px',
                fontWeight: 600,
                paddingRight: '8px',
                paddingleft: '16px'
              }
            }
          }
        },
        search: {...ContentSkillEmpty.props.search, value: ''}
      }
    }
  }
};
