import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const CSATBanner = ({title, message, campaign, cta}) => {
  const {action: handleClick} = cta;
  const lastDay = campaign && new Date(Date.parse(campaign.endAt) - 1);
  const hasCampaign = lastDay && !Number.isNaN(lastDay.getTime());
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

  return (
    <section data-name="csat-banner" aria-label={title} className={style.banner} title={message}>
      <div data-name="csat-banner-message" className={style.surveyMessage}>
        {hasCampaign ? (
          <span className={style.surveyCalendar} aria-hidden="true">
            <span className={style.calendarMonth}>
              {formatDate({month: 'short'}).toUpperCase()}
            </span>
            <strong className={style.calendarDay}>{formatDate({day: 'numeric'})}</strong>
          </span>
        ) : (
          <span className={style.surveyIcon} aria-hidden="true">
            ☆
          </span>
        )}
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
      </div>
      <div className={style.surveyCtaWrapper}>
        <ButtonLink
          data-name="csat-link-cta"
          aria-label={cta.ariaLabel || cta.label}
          label={cta.label}
          content={
            <span className={style.surveyCtaContent}>
              {cta.label}
              <span aria-hidden="true">↗</span>
            </span>
          }
          link={cta.link}
          onClick={handleClick}
          type="primary"
          className={style.surveyCta}
        />
      </div>
    </section>
  );
};

CSATBanner.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  campaign: PropTypes.shape({
    endAt: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    until: PropTypes.string.isRequired
  }),
  cta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    link: ButtonLink.propTypes.link,
    action: PropTypes.func
  }).isRequired
};

export default CSATBanner;
