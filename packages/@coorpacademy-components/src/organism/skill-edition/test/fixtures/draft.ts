import BrandFormGroup from '../../../../molecule/brand-form-group/test/fixtures/skill-edition';
import ContentSkill from '../../../list-items/test/fixtures/content-skill';
import IconEditor from '../../../icon-editor/test/fixtures/default';
import ListItems from '../../../list-items/test/fixtures/translations';
import Default from './default';

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
      iconEditor: IconEditor.props
    },
    translations: ListItems.props,
    content: {
      title: Default.props.content.title,
      listContent: ContentSkill.props
    }
  }
};
