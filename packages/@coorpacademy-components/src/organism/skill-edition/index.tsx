import React from 'react';
import {includes, isEmpty, keys, map} from 'lodash/fp';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';
import {COLORS} from '../../variables/colors';
import propTypes, {
  TranslationPropsType,
  SkillEditionPropsType,
  SkillInformationsProps,
  InputTextareaProps,
  InputTextProps,
  ContentPropsType,
  ContentListItemType
} from './types';
import style from './style.css';

const buildFormField = (field: InputTextareaProps | InputTextProps, type: 'text' | 'textarea') => {
  return {
    ...field,
    type,
    theme: 'coorpmanager',
    size: 'large'
  };
};

const buildTitleAndInputField = ({
  title,
  subtitle,
  required = false,
  dataName,
  childType
}: {
  title: string;
  subtitle?: string;
  required?: boolean;
  dataName?: string;
  childType?: string;
}) => {
  return {
    title: {
      type: 'form-group',
      title,
      subtitle,
      titleSize: 'small-and-light',
      subtitleSize: subtitle ? 'standard-without-margin' : undefined,
      required,
      'data-name': dataName
    },
    childType,
    type: 'titleAndInput'
  };
};

const SkillInformations = (skillInformations: SkillInformationsProps) => {
  const {form, iconEditor} = skillInformations;
  const {select, inputTextArea, inputText} = form;

  const iconEditorProps = {
    title: {
      type: 'form-group',
      title: iconEditor.title,
      titleSize: 'small-and-light',
      required: true
    },
    field: {
      iconPreview: iconEditor.iconPreview,
      inputText: iconEditor.inputText,
      buttonLink: iconEditor.buttonLink
        ? {
            type: 'secondary',
            label: iconEditor.buttonLink.label,
            ariaLabel: iconEditor.buttonLink.ariaLabel,
            dataName: 'open-icon-modal-button',
            icon: {
              position: 'left',
              faIcon: {
                name: 'arrows-rotate',
                size: 16
              }
            },
            onClick: iconEditor.buttonLink.onClick,
            customStyle: {
              borderRadius: '12px',
              padding: '0 8px 0 16px',
              fontWeight: '500'
            }
          }
        : undefined,
      size: 'large'
    },
    childType: 'iconEditor'
  };

  const fields = [
    {
      ...buildTitleAndInputField({
        title: select.title,
        subtitle: select.subtitle,
        required: true,
        dataName: select['data-name'],
        childType: 'select'
      }),
      field: {
        options: select.field.options,
        'aria-label': select.field['aria-label'],
        onChange: select.field.onChange,
        theme: 'skillDetail',
        size: 'large'
      }
    },
    {
      ...buildTitleAndInputField({
        title: inputText.title,
        required: true,
        childType: 'inputText'
      }),
      field: buildFormField(inputText.field, 'text')
    },
    {
      ...buildTitleAndInputField({
        title: inputTextArea.title,
        childType: 'inputTextArea'
      }),
      field: buildFormField(inputTextArea.field, 'textarea')
    }
  ];

  const formProps = {
    title: form.title,
    subtitle: form.subtitle,
    titleSize: 'xl-strong',
    subtitleSize: 'medium',
    fields
  };

  return (
    <div className={style.skillInformationsContainer}>
      <BrandFormGroup {...formProps} />
      <div className={style.iconEditor}>
        <TitleAndInput {...iconEditorProps} />
      </div>
    </div>
  );
};

// @ts-expect-error convert is not recognized by the types
const uncappedMap = map.convert({cap: false});

const buildButtonProps = (button: TranslationPropsType['button']) => ({
  ...button,
  type: 'primary',
  'aria-label': button.label,
  'data-name': `button-${button.label}`,
  hoverBackgroundColor: COLORS.primary_100,
  hoverColor: COLORS.cm_primary_blue,
  icon: {
    position: 'left',
    faIcon: {
      name: 'plus',
      color: COLORS.cm_primary_blue,
      size: 14,
      customStyle: {padding: 0}
    }
  },
  customStyle: {
    width: 'fit-content',
    backgroundColor: COLORS.cm_blue_50,
    color: COLORS.cm_primary_blue,
    borderRadius: '12px',
    paddingRight: '8px',
    paddingleft: '16px',
    fontWeight: 600
  }
});

const buildTranslationItems = (
  {
    title: itemTitle,
    onEditClick,
    onDeleteClick
  }: {title: string; onEditClick: () => void; onDeleteClick: () => void},
  index: number
) => ({
  id: index,
  title: itemTitle,
  buttonLink: {
    'aria-label': 'Edit',
    type: 'primary',
    customStyle: {
      width: 'fit-content',
      backgroundColor: 'transparent'
    },
    hoverBackgroundColor: COLORS.cm_grey_100,
    icon: {
      position: 'left',
      faIcon: {
        name: 'edit',
        color: COLORS.cm_grey_500,
        size: 16
      }
    },
    onClick: onEditClick
  },
  secondButtonLink: {
    'aria-label': 'Delete',
    type: 'primary',
    customStyle: {
      width: 'fit-content',
      backgroundColor: 'transparent'
    },
    hoverBackgroundColor: COLORS.cm_grey_100,
    icon: {
      position: 'left',
      faIcon: {
        name: 'trash',
        color: COLORS.cm_grey_500,
        size: 16
      }
    },
    onClick: onDeleteClick
  }
});

const Translations = ({
  title,
  subtitle,
  items,
  button,
  localesOptions,
  emptyResult
}: TranslationPropsType) => {
  const buttonProps = buildButtonProps(button);

  const translationMenuAction = {
    button: buttonProps,
    menu: {
      buttons: map(
        ({
          label: optionLabel,
          ref: optionRef,
          onClick: optionOnClick
        }: {
          label: string;
          ref: string;
          onClick: () => void;
        }) => ({
          type: 'defaultLeft',
          onClick: optionOnClick,
          customStyle: {width: '238px'},
          label: optionLabel,
          'data-name': optionLabel,
          // disable if current locale option is already in items list
          disabled: includes(optionRef, keys(items))
        }),
        localesOptions
      )
    },
    menuWrapper: {
      customStyle: {maxHeight: '252px'}
    }
  };

  const translationProps = {
    title: {
      title,
      type: 'form-group',
      subtitle,
      titleSize: 'xl-strong',
      subtitleSize: 'medium'
    },
    'aria-label': title,
    content: {
      ...(!isEmpty(emptyResult) && {emptyResult: {...emptyResult, button: translationMenuAction}}),
      items: uncappedMap(buildTranslationItems, items),
      type: 'list'
    },
    buttonMenuAction: translationMenuAction
  };

  return <ListItems {...translationProps} />;
};

const buildContentItem = ({
  ref,
  title,
  subtitle,
  image,
  tags: {label, iconName},
  checkbox,
  secondButtonLink
}: ContentListItemType) => ({
  id: ref,
  title,
  subtitle,
  image,
  tags: [
    {
      label,
      type: 'default',
      icon: {
        iconName,
        preset: 's',
        customStyle: {
          padding: 0
        },
        position: 'left'
      }
    }
  ],
  checkbox,
  secondButtonLink
});

const Content = ({
  title,
  subtitle,
  button,
  list: {title: listTitle, checkbox, items, search, emptyResult},
  actionButtons,
  checkboxWithTitle
}: ContentPropsType) => {
  const buttonProps = buildButtonProps(button);

  const titleProps = {
    type: 'form-group',
    title,
    subtitle,
    button: buttonProps,
    required: true
  };

  const listProps = {
    ...(!isEmpty(checkbox) && {
      ...checkbox,
      icon: {iconName: 'minus', iconColor: COLORS.white, preset: 's'},
      customStyle: {fontWeight: 600, color: COLORS.cm_grey_500, fontSize: '16px'}
    }),
    title: listTitle,
    'aria-label': 'content list items',
    content: {
      ...(!isEmpty(emptyResult) && {emptyResult: {...emptyResult, button: buttonProps}}),
      items: Array.isArray(items) ? map(buildContentItem, items).filter(Boolean) : [],
      type: 'list'
    },
    search: {
      ...search,
      theme: 'coorpmanager'
    },
    actionButtons,
    checkboxWithTitle
  };

  return (
    <div className={style.contentContainer}>
      <Title {...titleProps} />
      <ListItems {...listProps} />
    </div>
  );
};

const SkillEdition = (props: SkillEditionPropsType) => {
  const {skillInformations, translations, content} = props;

  return (
    <div className={style.container}>
      <SkillInformations {...skillInformations} />
      <Translations {...translations} />
      <Content {...content} />
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
