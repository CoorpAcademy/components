import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import keys from 'lodash/fp/keys';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Link from '../../../atom/link';
import Discussion from '../../../organism/discussion';
import CheckIcon from '@coorpacademy/nova-icons/solid/status/check-circle-2';
import Loader from '../../../atom/loader';
import Card from '../../../molecule/card';
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

const NextCourse = ({title, prefix, card}) => (
  <div data-name="nextCourse" className={style.nextCourseWrapper}>
    <div className={style.nextCourseTexts}>
      <div className={style.nextCoursePrefix}>{prefix}</div>
      <div className={style.nextCourseTitle}>{title}</div>
    </div>
    <div className={style.nextCourseCard}>
      <Card {...card} dataName={'popin-end-next-course'} />
    </div>
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

const CommentSection = props => {
  const {
    title,
    isSent,
    value,
    onPost,
    onChange,
    onClick,
    commentSectionTitle,
    confirmationLinkText
  } = props;
  if (isSent) {
    return (
      <div className={style.commentSectionWrapper}>
        <CheckIcon className={style.commentSectionIcon} />
        <div className={style.commentSectionTitleWrapper}>
          <p className={style.commentSectionTitle}>{commentSectionTitle}</p>
          <Link onClick={onClick} className={style.commentSectionLink}>
            {confirmationLinkText}
          </Link>
        </div>
      </div>
    );
  }
  return <Discussion title={title} value={value} onPost={onPost} onChange={onChange} />;
};

CommentSection.propTypes = {
  title: PropTypes.string,
  isSent: PropTypes.bool,
  value: PropTypes.string,
  onPost: PropTypes.func,
  onChange: PropTypes.func,
  commentSectionTitle: PropTypes.string,
  confirmationLinkText: PropTypes.string,
  onClick: PropTypes.string
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
      <CommentSection {...comment} />
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
  comment: PropTypes.shape(CommentSection.propTypes),
  action: PropTypes.shape({
    type: PropTypes.oneOf(keys(actions)).isRequired
  }),
  recommendation: PropTypes.shape(CardsList.propTypes)
};

export default Summary;
