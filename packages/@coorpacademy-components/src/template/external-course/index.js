import React from 'react';
import {NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon} from '@coorpacademy/nova-icons';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {get, getOr, keys, identity, isNil, isEmpty} from 'lodash/fp';
import PropTypes from 'prop-types';
import {EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../../atom/provider';
import Loader from '../../atom/loader';
import Button from '../../atom/button';
import ExternalContentViewer from '../../molecule/external-content-viewer';
import CmPopin from '../../molecule/cm-popin';
import style from './style.css';

const defaultWrapperStyle = {
  default: style.default,
  cockpit: style.defaultCockpit,
  mobile: style.default
};

class ExternalCourse extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(keys(EXTERNAL_CONTENT_ICONS)),
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
    }),
    loading: PropTypes.bool,
    backgroundImageUrl: PropTypes.string,
    contentType: PropTypes.string,
    mode: PropTypes.string,
    closePopin: PropTypes.shape({...CmPopin.propTypes})
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  handleOnClick = field => e => {
    e.stopPropagation();
    e.preventDefault();
    const onClick = get('onClick', field);
    return onClick && onClick(e);
  };

  render() {
    const {
      name,
      type,
      url,
      warning,
      complete,
      quit,
      loading,
      backgroundImageUrl,
      contentType,
      mode = 'default'
    } = this.props;
    const {skin} = this.context;
    const primary = getOr('#00B0FF', 'common.primary', skin);
    const IconType = EXTERNAL_CONTENT_ICONS[type].icon;
    const IconColor = EXTERNAL_CONTENT_ICONS[type].color;

    const mainContentSlot = loading ? (
      <div className={style.loader}>
        <Loader />
      </div>
    ) : (
      <ExternalContentViewer
        url={url}
        mode={mode}
        backgroundImageUrl={backgroundImageUrl}
        contentType={contentType}
      />
    );
    // eslint-disable-next-line no-console
    console.log('complete');
    // eslint-disable-next-line no-console
    console.log(complete);
    const completeButton = !isNil(complete) ? (
      <Button
        type="button"
        disabled={loading ? true : complete.disabled}
        onClick={loading ? identity : this.handleOnClick(complete)}
        submitValue={complete.label}
        style={{
          backgroundColor:
            complete.disabled || loading ? convert(`color(${primary} a(-50%))`) : primary,
          cursor: loading ? 'progress' : 'pointer'
        }}
        className={classnames(
          style.completeCta,
          complete.disabled || loading ? style.disabled : null,
          loading ? style.loading : null
        )}
      />
    ) : null;

    const warningButton = !isNil(warning) ? (
      <div className={style.leftSection}>
        <div
          onClick={this.handleOnClick(warning)}
          className={classnames(style.iconLabel, style.link)}
        >
          <QuestionIcon className={style.iconQuestion} width={24} height={24} />
          <span>{warning.label}</span>
        </div>
      </div>
    ) : null;

    const quitButton = !isNil(quit) ? (
      <div className={style.leftSection}>
        <span
          className={classnames(style.quitCta, loading ? style.loading : null)}
          onClick={loading ? identity : this.handleOnClick(quit)}
        >
          {quit.label}
        </span>
      </div>
    ) : null;

    const titleSection = !isNil(name) ? (
      <div className={classnames(style.iconLabel, style.title)}>
        <div className={style.oval} style={{backgroundColor: IconColor}}>
          <IconType className={style.iconHeader} />
        </div>
        <span
          className={style.innerHTML}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: name}}
        />
      </div>
    ) : null;

    const header =
      !isNil(quit) || !isEmpty(name) ? (
        <div className={style.header}>
          {quitButton}
          {titleSection}
          {isNil(quit) ? null : <div className={style.rightSection} />}
        </div>
      ) : null;

    const footer =
      !isNil(warning) || !isNil(complete) ? (
        <div className={style.footer}>
          {warningButton}
          {completeButton}
          {isNil(warning) ? null : <div className={style.rightSection} />}
        </div>
      ) : null;

    return (
      <div className={defaultWrapperStyle[mode]}>
        {header}
        {mainContentSlot}
        {footer}
      </div>
    );
  }
}

export default ExternalCourse;
