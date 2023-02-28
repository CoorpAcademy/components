import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {noop, getOr} from 'lodash/fp';
import {
  NovaLineBusinessCircleView as PreviewIcon,
  NovaLineContentEditionPencil2 as PencilIcon
} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import InputPreview from './input-preview';
import style from './style.css';

const InputHtml = (props, context) => {
  const {value = '', onChange = noop} = props;
  const [text, setText] = useState(value);
  const [preview, setPreview] = useState(true);

  const handleChange = useCallback(
    e => {
      const _value = e.target.value;
      setText(_value);
      onChange(_value);
    },
    [onChange]
  );

  const handlePreview = useCallback(
    e => {
      e.preventDefault();
      setPreview(!preview);
    },
    [preview, setPreview]
  );

  const {skin} = context;
  const mediumColor = getOr('#999999', 'common.medium', skin);

  const {title, placeholder, error, description, disabled} = props;

  const className = error ? style.error : style.default;
  const iconContent = !preview ? (
    <PreviewIcon style={{color: mediumColor}} height={16} />
  ) : (
    <PencilIcon style={{color: mediumColor}} height={16} />
  );

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <div className={style.contentWrapper}>
          <InputPreview
            title={title}
            text={text}
            placeholder={placeholder}
            onChange={handleChange}
            disabled={disabled}
            preview={preview}
            className={style.input}
          />
        </div>
        <span
          data-testid={preview ? 'pencil-icon' : 'preview-icon'}
          className={style.toggle}
          onClick={handlePreview}
        >
          {iconContent}
        </span>
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

InputHtml.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};

InputHtml.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default InputHtml;
