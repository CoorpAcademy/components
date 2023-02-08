import React from 'react';
import PropTypes from 'prop-types';
import {get, getOr, keys, isEmpty} from 'lodash/fp';
import classnames from 'classnames';
import {NovaSolidStatusCheckCircle2 as CheckIcon} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Link from '../../../atom/link';
import Discussion from '../../../organism/discussion';
import Loader from '../../../atom/loader';
import Card from '../../../molecule/card';
import Feedback from '../../../molecule/feedback';
import CardsList from '../../../molecule/dashboard/cards-list';
import PopinHeader from '../popin-header';
import AtomLottieWrapper from '../../../atom/lottie-wrapper';
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
        <span
          data-name="simpleTitle"
          className={classnames(style.simpleTitle, style.innerHTML)}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
      </div>
      <Button
        {...linkProps}
        type="link"
        style={{
          backgroundColor: color
        }}
        className={style.simpleButton}
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
      <div
        className={classnames(style.nextCourseTitle, style.innerHTML)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
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
        <div
          className={classnames(style.subscribeTitle, style.innerHTML)}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
        <div className={style.subscribeButtonWrapper}>
          <Button
            {...linkProps}
            type="link"
            className={style.subscribeButton}
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
  ...Button.propTypes.propTypes,
  title: Button.propTypes.submitValue
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

Action.propTypes = {
  type: PropTypes.oneOf(keys(actions))
};

const CardsLoader = () => (
  <div className={style.loaderWrapper}>
    <Loader />
  </div>
);

const CommentConfirmation = (props, context) => {
  const {onClick, commentSectionTitle, confirmationLinkText} = props;
  const {skin} = context;
  const dark = get('common.dark', skin);

  return (
    <div className={style.commentSection}>
      <div className={style.commentSectionIconWrapper}>
        <CheckIcon className={style.commentSectionIcon} style={{color: dark}} />
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
  commentSectionTitle: PropTypes.node,
  confirmationLinkText: Link.propTypes.children,
  onClick: Link.propTypes.onClick
};

CommentConfirmation.contextTypes = {
  skin: Provider.childContextTypes.skin
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

  return <Discussion {...edition} />;
};

CommentSection.propTypes = {
  isSent: PropTypes.bool,
  edition: PropTypes.shape(Discussion.propTypes),
  confirmation: PropTypes.shape(CommentConfirmation.propTypes)
};

const Cards = props => {
  const {cards} = props;

  return get('cards', props) === null ? (
    <CardsLoader />
  ) : (
    (isEmpty(cards) ? null : (
      <div className={style.cardsWrapper}>
        <CardsList {...props} dataName={'popin-end-recommendation'} />
      </div>
    )) || null
  );
};

Cards.propTypes = CardsList.propTypes;

const Footer = ({title, color, ...linkProps}) => (
  <Link
    {...linkProps}
    style={{
      color
    }}
    className={style.footer}
    data-name="nextLink"
    data-popin="popinEnd"
    data-next="home"
  >
    {title}
  </Link>
);

Footer.propTypes = {
  ...Link.propTypes,
  title: Link.propTypes.children,
  color: PropTypes.string
};

const Summary = (props, context) => {
  const {header, recommendation, comment, footer, action, feedback, mode} = props;
  const {skin} = context;
  const primary = getOr('#f0f', 'common.primary', skin);
  const commentView =
    mode !== 'scorm' && comment && header ? (
      <div className={style.discussionWrapper}>
        <CommentSection {...comment} />
      </div>
    ) : null;
  const footerView =
    mode !== 'scorm' && footer && header ? <Footer {...footer} color={primary} /> : null;
  const feedbackView = feedback ? <Feedback {...feedback} mode={mode} /> : null;

  return (
    <BackgroundScorm mode={mode} failed={header.failed}>
      <div className={mode !== 'scorm' ? style.summaryWrapper : null}>
        <Header {...header} mode={mode} />
        {feedbackView}
        <Action {...action} color={primary} />
        <Cards {...recommendation} />
        {commentView}
        {footerView}
      </div>
    </BackgroundScorm>
  );
};

const BackgroundScorm = props => {
  const {mode = 'default', children, failed} = props;
  if (mode === 'scorm')
    return (
      <div className={style.organismPlayerResultContainerScorm}>
        {failed === false ? (
          <div className={style.animationContainer}>
            <AtomLottieWrapper
              {...{
                'aria-label': 'aria lottie',
                'data-name': 'default-lottie',
                className: undefined,
                animationSrc:
                  'https://static-staging.coorpacademy.com/animations/review/confetti.json',
                loop: undefined,
                autoplay: true,
                rendererSettings: {
                  hideOnTransparent: false,
                  animationClassName: ''
                },
                animationControl: undefined
              }}
              loop={false}
              animationControl={'play'}
              autoplay
              data-name="lottie-wrapper"
              className={style.lottie}
              backupImageClassName={style.ie11Backup}
            />
          </div>
        ) : null}
        <div className={style.background}>
          <div className={style.largeCircle} />
          <div className={style.mediumCircle} />
          <div className={style.smallCircle} />
        </div>
        <div className={style.content}>{children}</div>
      </div>
    );
  return children;
};

Summary.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Summary.propTypes = {
  header: PropTypes.shape(PopinHeader.propTypes),
  footer: PropTypes.shape({
    title: PropTypes.string,
    href: Link.propTypes.href,
    onClick: PropTypes.func
  }),
  comment: PropTypes.shape(CommentSection.propTypes),
  action: PropTypes.shape({
    type: PropTypes.oneOf(keys(actions)).isRequired
  }),
  recommendation: PropTypes.shape(CardsList.propTypes),
  feedback: PropTypes.shape(Feedback.propTypes),
  mode: PropTypes.oneOf(['scorm', 'default'])
};

export default Summary;
