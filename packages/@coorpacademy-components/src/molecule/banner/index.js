import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys, noop, isEmpty, map, size} from 'lodash/fp';
import {COLORS} from '../../variables/colors';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const uncappedMap = map.convert({cap: false});

const TYPES = {
  success: ['circle-check', COLORS.cm_positive_200],
  error: ['triangle-exclamation', COLORS.cm_negative_200],
  warning: ['circle-exclamation', COLORS.cm_yellow_400],
  info: ['circle-info', COLORS.cm_grey_500],
  survey: ['star', COLORS.cm_blue_700]
};

const STYLES = {
  success: style.success,
  error: style.error,
  warning: style.warning,
  info: style.info,
  survey: style.survey
};

const Banner = props => {
  const {type, title, message, campaign, cta = [], temporary, bannerKey, onEnd} = props;

  const ButtonSeparator = <div className={classnames(style.buttonsBar, STYLES[type])} />;

  const buildButton = ({
    type: buttonType = 'button',
    label,
    action = noop,
    link,
    ariaLabel,
    oldSwitchValue = false
  }) => {
    const commonStyle = classnames(style.button, STYLES[type]);

    if (link) {
      return (
        <ButtonLink
          data-name="banner-link-cta"
          aria-label={ariaLabel || label}
          label={label}
          content={
            type === 'survey' ? (
              <span className={style.surveyCtaContent}>
                {label}
                <span aria-hidden="true">↗</span>
              </span>
            ) : undefined
          }
          link={link}
          onClick={action}
          type={type === 'survey' ? 'primary' : 'text'}
          className={type === 'survey' ? style.surveyCta : undefined}
        />
      );
    }

    switch (buttonType) {
      case 'switch':
        return (
          <div className={commonStyle}>
            <InputSwitch
              id="show-microlearning-switch"
              theme="default"
              title={label}
              value={oldSwitchValue}
              onChange={action}
              data-name={`banner-switch-cta`}
              aria-label={label}
            />
          </div>
        );
      default:
        return (
          <div className={commonStyle}>
            <ButtonLink
              data-name="banner-button-cta"
              aria-label={label}
              label={label}
              onClick={action}
              type="text"
              customStyle={{padding: 0}}
            />
          </div>
        );
    }
  };

  const buildCta = ctaOptions => {
    return uncappedMap((options, i) => {
      if (isEmpty(options)) return null;

      return (
        <div
          className={classnames(style.ctaWrapper, type === 'survey' && style.surveyCtaWrapper)}
          key={i}
        >
          {i > 0 && i <= size(options) ? ButtonSeparator : null}
          {buildButton(options)}
        </div>
      );
    }, ctaOptions);
  };

  const [iconName, iconColor] = TYPES[type];
  const Root = type === 'survey' ? 'section' : 'div';
  const lastDay = campaign && new Date(Date.parse(campaign.endAt) - 1);
  const hasCampaign = type === 'survey' && lastDay && !Number.isNaN(lastDay.getTime());
  const formatDate = options => {
    const dateOptions = {timeZone: 'Europe/Paris', ...options};
    try {
      return new Intl.DateTimeFormat(campaign.language.replace(/_/g, '-'), dateOptions).format(
        lastDay
      );
    } catch {
      return new Intl.DateTimeFormat('en-US', dateOptions).format(lastDay);
    }
  };

  const buildIcon = () => {
    if (hasCampaign) {
      return (
        <span className={style.surveyCalendar} aria-hidden="true">
          <span className={style.calendarMonth}>{formatDate({month: 'short'}).toUpperCase()}</span>
          <strong className={style.calendarDay}>{formatDate({day: 'numeric'})}</strong>
        </span>
      );
    }
    if (type === 'survey') {
      return (
        <span className={style.surveyIcon} aria-hidden="true">
          ☆
        </span>
      );
    }
    return (
      <Icon
        iconName={iconName}
        iconColor={iconColor}
        className={classnames(style.icon, temporary && style.temporaryIcon)}
        customStyle={{padding: 0}}
      />
    );
  };

  return (
    <Root
      key={bannerKey}
      data-name={type === 'survey' ? 'survey-banner' : undefined}
      aria-label={type === 'survey' ? title : undefined}
      className={classnames(style.banner, STYLES[type], temporary && style.temporaryBanner)}
      onAnimationEnd={onEnd}
      title={message}
    >
      <div
        data-name={`${type}-banner-message`}
        className={classnames(style.message, type === 'survey' && style.surveyMessage)}
      >
        {buildIcon()}
        {title ? (
          <div className={style.surveyText}>
            <div className={style.surveyHeading}>
              <h2 className={style.surveyTitle}>{title}</h2>
              {hasCampaign ? (
                <React.Fragment>
                  <span className={style.campaignStatus}>{campaign.status}</span>
                  <time className={style.campaignDate} dateTime={lastDay.toISOString()}>
                    {campaign.until} {formatDate({day: 'numeric', month: 'long'})}
                  </time>
                </React.Fragment>
              ) : null}
            </div>
            <p className={style.surveyDescription}>{message}</p>
          </div>
        ) : (
          message
        )}
      </div>
      {buildCta(cta)}
    </Root>
  );
};

const ctaPropTypes = PropTypes.shape({
  label: PropTypes.string,
  type: PropTypes.oneOf(['button', 'switch']),
  action: PropTypes.func,
  oldSwitchValue: PropTypes.bool,
  link: ButtonLink.propTypes.link,
  ariaLabel: PropTypes.string
});

Banner.propTypes = {
  bannerKey: PropTypes.string,
  type: PropTypes.oneOf(keys(TYPES)),
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  campaign: PropTypes.shape({
    endAt: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    until: PropTypes.string.isRequired
  }),
  cta: PropTypes.arrayOf(ctaPropTypes),
  temporary: PropTypes.bool,
  onEnd: PropTypes.func
};

export default Banner;
