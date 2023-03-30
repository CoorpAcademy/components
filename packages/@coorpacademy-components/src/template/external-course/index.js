import React, {useCallback, useMemo} from 'react';
import {NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon} from '@coorpacademy/nova-icons';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {noop, getOr, keys, identity, isNil, isEmpty} from 'lodash/fp';
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

const ExternalCourse = (props, context) => {
  const {
    name,
    type,
    url,
    quit,
    complete,
    warning,
    loading,
    backgroundImageUrl,
    contentType,
    mode = 'default',
    closePopin
  } = props;
  const {skin} = context;
  const primary = getOr('#00B0FF', 'common.primary', skin);
  const IconType = EXTERNAL_CONTENT_ICONS[type].icon;
  const IconColor = EXTERNAL_CONTENT_ICONS[type].color;

  const mainContentSlot = useMemo(() => {
    return loading ? (
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
  }, [loading, url, mode, contentType, backgroundImageUrl]);

  const handleOnClick = useCallback(field => {
    const onClick = getOr(noop, ['onClick'], field);
    return e => {
      e.stopPropagation();
      e.preventDefault();
      return onClick(e);
    };
  }, []);

  const completeButton = useMemo(() => {
    return !isNil(complete) ? (
      <Button
        type="button"
        disabled={loading ? true : complete.disabled}
        onClick={loading ? identity : handleOnClick(complete)}
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
        data-testid="complete-button"
      />
    ) : null;
  }, [complete, loading, primary, handleOnClick]);

  const warningButton = useMemo(() => {
    return !isNil(warning) ? (
      <div className={style.leftSection}>
        <div onClick={handleOnClick(warning)} className={classnames(style.iconLabel, style.link)}>
          <QuestionIcon className={style.iconQuestion} width={24} height={24} />
          <span>{warning.label}</span>
        </div>
      </div>
    ) : null;
  }, [handleOnClick, warning]);

  const quitButton = useMemo(() => {
    return !isNil(quit) ? (
      <div className={style.leftSection}>
        <span
          className={classnames(style.quitCta, loading ? style.loading : null)}
          onClick={loading ? identity : handleOnClick(quit)}
        >
          {quit.label}
        </span>
      </div>
    ) : null;
  }, [quit, loading, handleOnClick]);

  const titleSection = useMemo(() => {
    return !isNil(name) ? (
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
  }, [name, IconColor]);

  const header = useMemo(() => {
    return !isNil(quit) || !isEmpty(name) ? (
      <div className={style.header}>
        {quitButton}
        {titleSection}
        {isNil(quit) ? null : <div className={style.rightSection} />}
      </div>
    ) : null;
  }, [name, titleSection, quit, quitButton]);

  const footer = useMemo(() => {
    return !isNil(warning) || !isNil(complete) ? (
      <div className={style.footer}>
        {warningButton}
        {completeButton}
        {isNil(warning) ? null : <div className={style.rightSection} />}
      </div>
    ) : null;
  }, [warning, warningButton, complete, completeButton]);

  const popin = useMemo(() => {
    return !isNil(closePopin) ? <CmPopin {...closePopin} /> : null;
  }, [closePopin]);

  return (
    <div className={defaultWrapperStyle[mode]}>
      {header}
      {popin}
      {mainContentSlot}
      {footer}
    </div>
  );
};

ExternalCourse.propTypes = {
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

ExternalCourse.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default ExternalCourse;
