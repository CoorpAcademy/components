import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import getOr from 'lodash/fp/getOr';
import PreviewIcon from '@coorpacademy/nova-icons/line/business/circle-view';
import PencilIcon from '@coorpacademy/nova-icons/line/content-edition/pencil-2';
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
    const viewContent = !this.state.preview
      ? <textarea
          name={title}
          value={this.state.text}
          placeholder={placeholder}
          onInput={handleChange}
          disabled={disabled}
        />
      : <div
          className={style.preview}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: this.state.text
          }}
        />;
    return (
      <div className={className}>
        <label>
          <span className={style.title}>{`${title} `}</span>
          <div className={style.contentWrapper}>
            {viewContent}
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
