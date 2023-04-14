import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import {EXTERNAL_CONTENT_ICONS} from '../../util/external-content';

import style from './style.css';

class ExternalContentButton extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func
  };

  static contextTypes = {
    translate: Provider.childContextTypes.translate
  };

  constructor(props, context) {
    super(props, context);
  }

  handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const {onClick} = this.props;
    onClick && onClick(e);
  };

  render() {
    const {translate} = this.context;
    const {type, description} = this.props;
    const IconType = EXTERNAL_CONTENT_ICONS[type].icon;
    const iconColor = EXTERNAL_CONTENT_ICONS[type].color;
    return (
      <div
        onClick={this.handleClick}
        className={style.button}
        data-testid="external-content-button"
      >
        <div className={style.header} style={{backgroundColor: iconColor}} />
        <div className={style.iconBackground} style={{backgroundColor: iconColor}}>
          <IconType className={style.icon} width={16} height={16} />
        </div>
        <span className={style.title}>
          {type === 'scorm' ? translate('external_content_scorm') : ''}
          {type === 'video' ? translate('external_content_video') : ''}
          {type === 'article' ? translate('external_content_article') : ''}
          {type === 'podcast' ? translate('external_content_podcast') : ''}
        </span>
        <span className={style.description}>{description}</span>
      </div>
    );
  }
}

export default ExternalContentButton;
