import React from 'react';
import {
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaCompositionCoorpacademyArticle as ArticleIcon,
  NovaCompositionCoorpacademyVideo as VideoIcon,
  NovaCompositionCoorpacademyWarn as WarnIcon
} from '@coorpacademy/nova-icons';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {get, getOr, keys} from 'lodash/fp';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import style from './style.css';

const ICONS = {
  scorm: {icon: ScormIcon, color: '#FFB800'},
  article: {icon: ArticleIcon, color: '#365FCD'},
  video: {icon: VideoIcon, color: '#E8335E'}
};

class ExternalCourse extends React.Component {
  handleOnClick = field => e => {
    e.stopPropagation();
    e.preventDefault();
    const onClick = get('onClick', field);
    return onClick && onClick(e);
  };

  render() {
    const {name, type, url, warning, complete, quit} = this.props;
    const {skin} = this.context;
    const primary = getOr('#00B0FF', 'common.primary', skin);
    const IconType = ICONS[type].icon;
    const IconColor = ICONS[type].color;

    return (
      <div className={style.default}>
        <div className={style.header}>
          <div className={style.leftSection}>
            <span className={style.quitCta} onClick={this.handleOnClick(quit)}>
              {quit.label}
            </span>
          </div>
          <div className={classnames(style.iconLabel, style.title)}>
            <div className={style.oval} style={{backgroundColor: IconColor}}>
              <IconType className={style.iconHeader} />
            </div>
            <span>{name}</span>
          </div>
          <div className={style.rightSection} />
        </div>
        <iframe src={url} frameBorder={0} className={style.iframe} allowFullScreen />
        <div className={style.footer}>
          <div className={style.leftSection}>
            <div
              onClick={this.handleOnClick(warning)}
              className={classnames(style.iconLabel, style.link)}
            >
              <div className={classnames(style.oval, style.warn)}>
                <WarnIcon className={style.iconWarm} />
              </div>
              <span>{warning.label}</span>
            </div>
          </div>
          <Button
            type="button"
            disabled={complete.disabled}
            onClick={this.handleOnClick(complete)}
            submitValue={complete.label}
            style={{
              backgroundColor: complete.disabled ? convert(`color(${primary} a(-50%))`) : primary
            }}
            className={classnames(style.completeCta, complete.disabled ? style.disabled : null)}
          />
          <div className={style.rightSection} />
        </div>
      </div>
    );
  }
}

ExternalCourse.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ExternalCourse.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(keys(ICONS)),
  url: PropTypes.string.isRequired,
  quit: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }),
  complete: PropTypes.shape({
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  }),
  warning: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
  })
};

export default ExternalCourse;
