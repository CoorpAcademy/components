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
  static propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    description: PropTypes.string
  };

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
    this.handleChange = this.handleChange.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }

  handleChange(e) {
    const {onChange = noop} = this.props;
    const value = e.target.value;
    this.setState(state => ({
      text: value,
      preview: state.preview
    }));
    onChange(value);
  }

  handlePreview(e) {
    e.preventDefault();
    this.setState(state => ({
      text: state.text,
      preview: !state.preview
    }));
  }

  render() {
    const {skin} = this.context;
    const mediumColor = getOr('#999999', 'common.medium', skin);

    const {title, placeholder, error, description, disabled} = this.props;
    const {text, preview} = this.state;

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
              onChange={this.handleChange}
              disabled={disabled}
              preview={preview}
              className={style.input}
            />
          </div>
          <span className={style.toggle} onClick={this.handlePreview}>
            {iconContent}
          </span>
        </label>
        <div className={style.description}>{description}</div>
      </div>
    );
  }
}
export default InputHtml;
