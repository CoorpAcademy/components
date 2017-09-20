import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import getOr from 'lodash/fp/getOr';
import PreviewIcon from '@coorpacademy/nova-icons/line/business/circle-view';
import PencilIcon from '@coorpacademy/nova-icons/line/content-edition/pencil-2';
import InputPreview from './input-preview';
import style from './style.css';

class InputHtml extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      text: getOr('', 'value', props),
      preview: true
    };
  }

  componentWillReceiveProps(nextProps) {
    if (typeof nextProps.value !== 'undefined') {
      this.setState(state => ({
        text: nextProps.value,
        preview: state.preview
      }));
    }
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
    const iconContent = !this.state.preview
      ? <PreviewIcon color={mediumColor} />
      : <PencilIcon color={mediumColor} />;
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
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  }
}

InputHtml.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputHtml;
