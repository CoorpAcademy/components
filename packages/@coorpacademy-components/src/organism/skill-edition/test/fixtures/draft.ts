import BrandFormGroup from '../../../../molecule/brand-form-group/test/fixtures/skill-edition';
import ContentSkill from '../../../list-items/test/fixtures/content-skill';
import TitleAndInput from '../../../title-and-input/test/fixtures/icon-editor-and-title';
import {TranslationPropsType} from '../../types';
import Default, {translationsEmptyProps} from './default';

export const translationsProps: TranslationPropsType = {
  ...translationsEmptyProps,
  emptyResult: undefined,
  items: {
    fr: {
      title: '🇫🇷 French',
      onEditClick: () => console.log('on edit click'),
      onDeleteClick: () => console.log('on delete click')
    }
  }
};

export default {
  props: {
    skillInformations: {
      form: {
        ...BrandFormGroup.props,
        fields: [
          {...BrandFormGroup.props.fields[0]},
          {
            ...BrandFormGroup.props.fields[1],
            field: {...BrandFormGroup.props.fields[1].field, value: 'Cloud computing technology'}
          },
          {
            ...BrandFormGroup.props.fields[2],
            field: {
              ...BrandFormGroup.props.fields[2].field,
              value:
                'Cloud computing enables on-demand access to computing resources, such as storage, processing power, and applications, over the internet, allowing for greater scalability, flexibility, and cost efficiency.'
            }
          }
        ]
      },
      iconEditor: {...TitleAndInput.props}
    },
    translations: translationsProps,
    content: {
      title: Default.props.content.title,
      listContent: ContentSkill.props
    }
  }
};
