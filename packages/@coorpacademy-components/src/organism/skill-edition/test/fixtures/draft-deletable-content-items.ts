// fichier1.ts
import {COLORS} from '../../../../variables/colors';
import {ContentPropsType, ContentListItemType} from '../../types';
import Default from './default';
import {translationsProps, contentData, contentProps} from './draft';

const updatedContentData: ContentListItemType[] = contentData.map(item => ({
  ...item,
  deleteButton: {
    onClick: () => console.log('Click on delete icon')
  }
}));

const updatedContentProps: ContentPropsType = {
  ...contentProps,
  list: {
    ...contentProps.list,
    items: updatedContentData
  },
  actionButtons: [
    {
      label: 'Delete',
      type: 'secondary',
      onClick: () => console.log('click Save changes'),
      icon: {
        position: 'left',
        faIcon: {
          name: 'trash',
          color: COLORS.cm_grey_700,
          size: 14
        }
      }
    }
  ],
  checkboxWithTitle: {
    title: '<span style="color: #1D1D2B;">1</span><span>&nbsp;</span>items selected',
    checked: true,
    onChange: value => console.log(value)
  }
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
    content: updatedContentProps
  }
};
