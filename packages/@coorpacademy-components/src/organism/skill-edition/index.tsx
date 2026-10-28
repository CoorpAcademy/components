import React from 'react';
import {includes, isEmpty, keys, map, omit} from 'lodash/fp';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import TitleAndInput from '../title-and-input';
import {COLORS} from '../../variables/colors';
import Loader from '../../atom/loader';
import ContentSelectionList, {buildButtonProps} from '../content-selection-list';
import propTypes, {
  TranslationPropsType,
  SkillEditionPropsType,
  SkillInformationsProps,
  InputTextareaProps,
  InputTextProps
} from './types';
import style from './styles';

const buildFormField = (
  field: InputTextareaProps | InputTextProps,
  type: 'text' | 'textarea',
  readOnly?: boolean
) => {
  const fieldWithoutOverrides = omit(['type', 'theme', 'size', 'readOnly'], field);
  return {
    ...fieldWithoutOverrides,
    readOnly,
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

const SkillInformations = (skillInformations: SkillInformationsProps & {readOnly?: boolean}) => {
  const {form, iconEditor, readOnly} = skillInformations;
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
      inputText: {...iconEditor.inputText, readOnly},
      buttonLink:
        iconEditor.buttonLink && !readOnly
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
        size: 'large',
        readOnly
      }
    },
    {
      ...buildTitleAndInputField({
        title: inputText.title,
        required: true,
        childType: 'inputText'
      }),
      field: buildFormField(inputText.field, 'text', readOnly)
    },
    {
      ...buildTitleAndInputField({
        title: inputTextArea.title,
        childType: 'inputTextArea'
      }),
      field: buildFormField(inputTextArea.field, 'textarea', readOnly)
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

const buildTranslationItems = (
  {
    title: itemTitle,
    onEditClick,
    onDeleteClick,
    readOnly = false
  }: {title: string; onEditClick: () => void; onDeleteClick?: () => void; readOnly?: boolean},
  index: number
) => {
  return {
    ...(!readOnly && onDeleteClick
      ? {
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
                color: COLORS.neutral_500,
                size: 16
              }
            },
            onClick: onDeleteClick
          }
        }
      : {}),
    id: index,
    title: itemTitle,
    buttonLink: {
      'aria-label': readOnly ? 'View Custom SKill' : 'Edit Custom Skill',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: COLORS.cm_grey_100,
      icon: {
        position: 'left',
        faIcon: {
          name: readOnly ? 'eye' : 'edit',
          color: COLORS.neutral_500,
          size: 16
        }
      },
      onClick: onEditClick
    }
  };
};

const Translations = ({
  title,
  subtitle,
  items,
  button,
  localesOptions,
  emptyResult,
  readOnly = false
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
      items: uncappedMap(
        (
          item: {title: string; onEditClick: () => void; onDeleteClick?: () => void},
          index: number
        ) => buildTranslationItems({...item, readOnly}, index),
        items
      ),
      type: 'list'
    },
    buttonMenuAction: readOnly ? undefined : translationMenuAction
  };

  return <ListItems {...translationProps} />;
};

const SkillEdition = (props: SkillEditionPropsType) => {
  const {skillInformations, translations, content, isFetching = false, readOnly} = props;

  return isFetching ? (
    <div className={style.loaderContainer}>
      <Loader className={style.loader} theme="coorpmanager" />
    </div>
  ) : (
    <div className={style.container}>
      <SkillInformations {...skillInformations} readOnly={readOnly} />
      <Translations {...translations} readOnly={readOnly} />
      <ContentSelectionList {...content} readOnly={readOnly} />
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
