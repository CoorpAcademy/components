import React from 'react';
import PropTypes from 'prop-types';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';
import InputText from '../../atom/input-text';
import InputTextarea from '../../atom/input-textarea';
import propTypes, {SkillEditionProps, SkillInformationsProps} from './types';
import style from './style.css';

const buildFormField = (
  field:
    | PropTypes.InferProps<typeof InputText.propTypes>
    | PropTypes.InferProps<typeof InputTextarea.propTypes>,
  type: 'text' | 'textarea'
) => {
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
  childType: string;
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
      buttonLink: {
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
        customStyle: {borderRadius: '12px', padding: '0 8px 0 16px', fontWeight: '500'}
      },
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

const SkillEdition = (props: SkillEditionProps) => {
  const {skillInformations, translations, content} = props;

  return (
    <div className={style.container}>
      <SkillInformations {...skillInformations} />
      <ListItems {...translations} />
      <div className={style.contentContainer}>
        <Title {...content.title} />
        <ListItems {...content.listContent} />
      </div>
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
