import BrandFormGroup from '../../../../molecule/brand-form-group/test/fixtures/skill-edition';
import TitleAndInput from '../../../title-and-input/test/fixtures/icon-editor-and-title';
import {ContentListItemType, ContentPropsType, TranslationPropsType} from '../../types';
import {contentEmptyProps, translationsEmptyProps} from './default';

const translationsProps: TranslationPropsType = {
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

const contentData: ContentListItemType[] = [
  {
    ref: 'content_1',
    title: 'Content 1',
    subtitle: 'Subtitle 1',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    tags: {label: 'Course', iconName: 'book-open'},
    checkbox: {
      checked: false,
      onChange: (value: boolean) => {
        console.log(value);
      }
    }
  },
  {
    ref: 'content_2',
    title: 'Content 2',
    subtitle: 'Subtitle 2',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    tags: {label: '5’Learning', iconName: 'stopwatch'},
    checkbox: {
      checked: false,
      onChange: (value: boolean) => {
        console.log(value);
      }
    }
  },
  {
    ref: 'content_3',
    title: 'Content 3',
    subtitle: 'Subtitle 3',
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    tags: {label: 'Video', iconName: 'circle-play'},
    checkbox: {
      checked: true,
      onChange: (value: boolean) => {
        console.log(value);
      }
    }
  }
];

const contentProps: ContentPropsType = {
  ...contentEmptyProps,
  list: {
    ...contentEmptyProps.list,
    emptyResult: undefined,
    items: contentData,
    checkbox: {
      title: '1 item selected',
      checked: false,
      onChange: (value: boolean) => console.log(value)
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
    content: contentProps
  }
};
