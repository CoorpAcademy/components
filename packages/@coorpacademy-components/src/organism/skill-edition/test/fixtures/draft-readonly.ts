import {COLORS} from '../../../../variables/colors';
import {ContentPropsType, ContentListItemType} from '../../types';
import Default from './default';
import {translationsProps, contentData, contentProps} from './draft';

const updatedContentData: ContentListItemType[] = contentData.map(item => ({
  ...item
}));

const updatedContentProps: ContentPropsType = {
  ...contentProps,
  list: {
    ...contentProps.list,
    items: updatedContentData
  },
  readOnly: true
};

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
    translations: translationsProps,
    content: updatedContentProps,
    readOnly: true
  }
};
