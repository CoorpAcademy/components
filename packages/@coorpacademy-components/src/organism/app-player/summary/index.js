import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import keys from 'lodash/fp/keys';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Link from '../../../atom/link';
import Loader from '../../../atom/loader';
import Card from '../../../molecule/card';
import CardsList from '../../../molecule/dashboard/cards-list';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import style from './style.css';

const Header = props => <PopinHeader {...props} />;

const SimpleAction = ({color, prefix, title, button}) => {
  const {title: buttonTitle, ...linkProps} = button;
  return (
    <div className={style.simpleWrapper}>
      <div className={style.simpleTexts}>
        <span className={style.simplePrefix}>{prefix}</span>
        <span className={style.simpleTitle}>{title}</span>
      </div>
      <Button
        style={{
          backgroundColor: color
        }}
        className={style.simpleButton}
        {...linkProps}
        submitValue={buttonTitle}
      />
    </div>
  );
};

const NextCourse = ({title, description, prefix, card}) => (
  <div className={style.nextCourseWrapper}>
    <div className={style.nextCourseTexts}>
      <div className={style.nextCourseDescription}>{description}</div>
      <div className={style.nextCoursePrefix}>{prefix}</div>
      <div className={style.nextCourseTitle}>{title}</div>
    </div>
    <div className={style.nextCourseCard}>
      <Card {...card} />
    </div>
  </div>
);

const Subscribe = ({title, description, button, card}) => {
  const {title: buttonTitle, ...linkProps} = button;
  return (
    <div className={style.subscribeWrapper}>
      <div className={style.subscribeTexts}>
        <div className={style.subscribeDescription}>{description}</div>
        <div className={style.subscribeTitle}>{title}</div>
        <div className={style.subscribeButtonWrapper}>
          <Button className={style.subscribeButton} {...linkProps} submitValue={buttonTitle} />
        </div>
      </div>
      <div className={style.subscribeCard}>
        <Card {...card} />
      </div>
    </div>
  );
};

const actions = {
  simple: SimpleAction,
  subscribe: Subscribe,
  nextCourse: NextCourse
};

const Action = props => {
  const {type, ...actionProps} = props;
  if (!type) return null;

  const Type = actions[type];
  return <Type {...actionProps} />;
};

const Cards = props => {
  if (props.cards) {
    return <CardsList {...props} />;
  } else {
    return (
      <div className={style.loaderWrapper}>
        <Loader />
      </div>
    );
  }
};

const Footer = ({title, color, ...linkProps}) => (
  <Link
    style={{
      color
    }}
    className={style.footer}
    {...linkProps}
  >
    {title}
  </Link>
);

const Summary = (props, context) => {
  const {header, recommendation, footer, action} = props;
  const {skin} = context;
  const primary = getOr('#f0f', 'common.primary', skin);

  return (
    <div className={style.wrapper}>
      <Header {...header} />
      <Action color={primary} {...action} />
      <Cards {...recommendation} />
      <Footer color={primary} {...footer} />
    </div>
  );
};

Summary.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Summary.propTypes = {
  header: PropTypes.shape(PopinHeader.propTypes),
  footer: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.url,
    onClick: PropTypes.func
  }),
  action: PropTypes.shape({
    type: PropTypes.oneOf(keys(actions)).required
  }),
  recommendation: PropTypes.shape(CardsList.propTypes)
};

export default Summary;
