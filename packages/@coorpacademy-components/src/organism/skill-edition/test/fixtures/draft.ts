import ContentSkill from '../../../list-items/test/fixtures/content-skill';
import ListItems from '../../../list-items/test/fixtures/translations';
import {COLORS} from '../../../../variables/colors';
import Default from './default';

export default {
  props: {
    skillInformations: {
      form: {
        ...Default.props.skillInformations.form,
        inputText: {
          ...Default.props.skillInformations.form.inputText,
          field: {
            ...Default.props.skillInformations.form.inputText.field,
            value: 'Cloud computing technology'
          }
        },
        inputTextArea: {
          ...Default.props.skillInformations.form.inputTextArea,
          field: {
            ...Default.props.skillInformations.form.inputTextArea.field,
            value:
              'Cloud computing enables on-demand access to computing resources, such as storage, processing power, and applications, over the internet, allowing for greater scalability, flexibility, and cost efficiency.'
          }
        }
      },
      iconEditor: {
        ...Default.props.skillInformations.iconEditor,
        iconPreview: {
          title: 'Cloud computing technology',
          icon: {color: COLORS.cm_turquoise_strong, name: 'globe-pointer'}
        },
        inputText: {
          ...Default.props.skillInformations.iconEditor,
          value: COLORS.cm_turquoise_strong
        }
      }
    },
    translations: ListItems.props,
    content: {
      title: Default.props.content.title,
      listContent: ContentSkill.props
    }
  }
};
