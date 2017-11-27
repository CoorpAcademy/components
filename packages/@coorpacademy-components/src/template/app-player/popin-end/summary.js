import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import keys from 'lodash/fp/keys';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Link from '../../../atom/link';
import Loader from '../../../atom/loader';
import Card from '../../../molecule/card';
import ForumComment from '../../../molecule/forum/forum-comment';
import CardsList from '../../../molecule/dashboard/cards-list';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import style from './summary.css';

const Header = props => <PopinHeader {...props} />;

const SimpleAction = ({color, prefix, title, button}) => {
  const {title: buttonTitle, ...linkProps} = button;
  return (
    <div data-name="simpleAction" className={style.simpleWrapper}>
      <div className={style.simpleTexts}>
        <span data-name="simplePrefix" className={style.simplePrefix}>
          {prefix}
        </span>
        <span data-name="simpleTitle" className={style.simpleTitle}>
          {title}
        </span>
      </div>
      <Button
        type="link"
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
SimpleAction.propTypes = {
  color: PropTypes.string,
  prefix: PropTypes.string,
  title: PropTypes.string,
  button: PropTypes.shape(Button.propTypes)
};

const SocialSharing = (props, context) => {
  const { translate } = context;
  return (
    <div data-name="socialSharing" className={style.socialSharing}>
      <div data-name="socialSharingLinkedin" className={style.socialSharingLinkedin}>
        <div className={style.socialSharingText}>{translate('socialSharingText')}</div>
        <div className={style.linkedinWrapper}>
          <span className={style.linkedinMessage}>{translate('socialSharingText')}</span>
          <Button type="link" className={style.linkedinButton} href="" submitValue=""/>
        </div>
      </div>
    </div>
  );
};

SocialSharing.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const NextCourse = ({title, prefix, card}) => (
  <div data-name="nextCourse" className={style.nextCourseWrapper}>
    <div className={style.nextCourseTexts}>
      <div className={style.nextCoursePrefix}>{prefix}</div>
      <div className={style.nextCourseTitle}>{title}</div>
    </div>
    <div className={style.nextCourseCard}>
      <Card {...card} dataName={'popin-end-next-course'} />
    </div>
    <SocialSharing/>
  </div>
);
NextCourse.propTypes = {
  title: PropTypes.string,
  prefix: PropTypes.string,
  card: PropTypes.shape(CardsList.propTypes)
};

const Subscribe = ({title, description, button, card}) => {
  const {title: buttonTitle, ...linkProps} = button;
  return (
    <div className={style.subscribeWrapper}>
      <div className={style.subscribeTexts}>
        <div className={style.subscribeDescription}>{description}</div>
        <div className={style.subscribeTitle}>{title}</div>
        <div className={style.subscribeButtonWrapper}>
          <Button
            type="link"
            className={style.subscribeButton}
            {...linkProps}
            submitValue={buttonTitle}
          />
        </div>
      </div>
      <div>
        <Card {...card} dataName={'popin-end-subscribe'} />
      </div>
    </div>
  );
};
Subscribe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  prefix: PropTypes.string,
  card: PropTypes.shape(CardsList.propTypes)
};

const actions = {
  simple: SimpleAction,
  subscribe: Subscribe,
  nextCourse: NextCourse
};

const Action = props => {
  const {type, ...actionProps} = props;
  const Type = get(type, actions);

  return Type ? <Type {...actionProps} /> : null;
};

const CardsLoader = () => (
  <div className={style.loaderWrapper}>
    <Loader />
  </div>
);

const Comment = props => {
  const {isSent, value, onPost, onChange} = props;
  if (isSent) {
    const log = "log"
    return <span>{log}</span>;
  }
  return <ForumComment value={value} onPost={onPost} onChange={onChange} />;
};

const Cards = props =>
  get('cards', props) === null ? (
    <CardsLoader />
  ) : (
    (props.cards && <CardsList {...props} dataName={'popin-end-recommendation'} />) || null
  );

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
  const {header, recommendation, comment, footer, action} = props;
  const {skin} = context;
  const primary = getOr('#f0f', 'common.primary', skin);

  return (
    <div className={style.summaryWrapper}>
      <Header {...header} />
      <Action color={primary} {...action} />
      <Cards {...recommendation} />
      <Comment {...comment} />
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
    type: PropTypes.oneOf(keys(actions)).isRequired
  }),
  recommendation: PropTypes.shape(CardsList.propTypes)
};

export default Summary;
