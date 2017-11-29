import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import keys from 'lodash/fp/keys';
import CheckIcon from '@coorpacademy/nova-icons/solid/status/check-circle-2';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Link from '../../../atom/link';
import Discussion from '../../../organism/discussion';
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

const CommentConfirmation = props => {
  const {onClick, commentSectionTitle, confirmationLinkText} = props;

  return (
    <div className={style.commentSection}>
      <div className={style.commentSectionIconWrapper}>
        <CheckIcon className={style.commentSectionIcon} />
      </div>
      <div className={style.commentSectionTexts}>
        <p>{commentSectionTitle}</p>
        <Link onClick={onClick} className={style.commentSectionLink}>
          {confirmationLinkText}
        </Link>
      </div>
    </div>
  );
};

CommentConfirmation.propTypes = {
  commentSectionTitle: PropTypes.string.isRequired,
  confirmationLinkText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const CommentSection = props => {
  const {isSent, edition, confirmation} = props;
  if (isSent) {
    const {onClick, commentSectionTitle, confirmationLinkText} = confirmation;
    return (
      <CommentConfirmation
        onClick={onClick}
        commentSectionTitle={commentSectionTitle}
        confirmationLinkText={confirmationLinkText}
      />
    );
  }

  const {title, value, onPost, onChange} = edition;
  return <Discussion title={title} value={value} onPost={onPost} onChange={onChange} />;
};

CommentSection.propTypes = {
  isSent: PropTypes.bool,
  edition: PropTypes.shape({
    title: Discussion.propTypes.title,
    value: Discussion.propTypes.value,
    onPost: Discussion.propTypes.onPost,
    onChange: Discussion.propTypes.onChange
  }),
  confirmation: PropTypes.shape({
    commentSectionTitle: CommentConfirmation.propTypes.commentSectionTitle,
    confirmationLinkText: CommentConfirmation.propTypes.confirmationLinkText,
    onClick: CommentConfirmation.propTypes.onClick
  })
};

const Cards = props =>
  get('cards', props) === null ? (
    <CardsLoader />
  ) : (
    (props.cards && (
      <div className={style.cardsWrapper}>
        <CardsList {...props} dataName={'popin-end-recommendation'} />
      </div>
    )) ||
    null
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
  const commentView = comment && header ? <CommentSection {...comment} /> : null;
  const footerView = footer && header ? <Footer color={primary} {...footer} /> : null;

  return (
    <div className={style.summaryWrapper}>
      <Header {...header} />
      <Action color={primary} {...action} />
      <Cards {...recommendation} />
      {commentView}
      {footerView}
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
