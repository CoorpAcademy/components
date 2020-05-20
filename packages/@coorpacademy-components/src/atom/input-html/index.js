import React from 'react';
import PropTypes from 'prop-types';
import {noop, getOr, isUndefined} from 'lodash/fp';
import {
  NovaLineBusinessCircleView as PreviewIcon,
  NovaLineContentEditionPencil2 as PencilIcon
} from '@coorpacademy/nova-icons';
import InputPreview from './input-preview';
import style from './style.css';

class InputHtml extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const {value} = props;

    if (isUndefined(value)) return null;

    return {
      text: value,
      preview: state.preview
    };
  }

  constructor(props, context) {
    super(props);
    this.state = {
      text: getOr('', 'value', props),
      preview: true
    };
  }

  render() {
    const {skin} = this.context;
    const mediumColor = getOr('#999999', 'common.medium', skin);

    const {title, placeholder, onChange = noop, error, description, disabled} = this.props;

    const className = error ? style.error : style.default;
    const handleChange = e => {
      const text = e.target.value;
      this.setState(state => ({
        text,
        preview: state.preview
      }));
      onChange(text);
    };
    const handlePreview = e => {
      e.preventDefault();
      this.setState(state => ({
        text: state.text,
        preview: !state.preview
      }));
    };
    const iconContent = !this.state.preview ? (
      <PreviewIcon color={mediumColor} height={16} />
    ) : (
      <PencilIcon color={mediumColor} height={16} />
    );
    return (
      <div className={className}>
        <label>
          <span className={style.title}>{`${title} `}</span>
          <div className={style.contentWrapper}>
            <InputPreview
              title={title}
              text={this.state.text}
              placeholder={placeholder}
              handleChange={handleChange}
              disabled={disabled}
              preview={this.state.preview}
              className={style.input}
            />
          </div>
          <span className={style.toggle} onClick={handlePreview}>
            {iconContent}
          </span>
        </label>
        <div className={style.description}>{description}</div>
      </div>
    );
  }
}

InputHtml.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputHtml;
