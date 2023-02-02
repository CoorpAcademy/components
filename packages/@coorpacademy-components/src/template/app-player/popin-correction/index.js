import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defer, isNil, isEmpty, get, getOr, keys, omit} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaLineInterfaceFeedbackInterfaceAlertCircle as AlertIcon
} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import Loader from '../../../atom/loader';
import Link from '../../../atom/link';
import Provider from '../../../atom/provider';
import ResourceBrowser from '../../../organism/resource-browser';
import Accordion from '../../../organism/accordion/container';
import CMPopin from '../../../molecule/cm-popin';
import Header from '../popin-header';
import style from './style.css';

const extractTabs = items =>
  keys(items).map(type => {
    const item = items[type];
    return {iconType: type, title: item.title, isOpen: item.open};
  });

const Resources = ({resources, overlay}) => (
  <div className={style.browserWrapper}>
    <ResourceBrowser resources={resources.value} overlay={overlay} className={style.browser} />
  </div>
);

Resources.propTypes = {
  resources: PropTypes.shape({
    value: ResourceBrowser.propTypes.resources
  }),
  overlay: ResourceBrowser.propTypes.overlay
};

const SimpleText = ({text}) => (
  <div data-name="simpleText" className={style.simpleTextWrapper}>
    <p
      className={classnames(style.simpleText, style.innerHTML)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: text}}
    />
  </div>
);

SimpleText.propTypes = {
  text: PropTypes.string
};

const AssistanceLink = (props, context) => {
  if (isEmpty(props)) return null;
  const {title, onClick} = props;
  if (isEmpty(title)) return null;
  const {skin} = context;
  const white = get('common.white', skin);

  return (
    <div className={style.wrapperAssistance} onClick={onClick}>
      <AlertIcon className={style.alertIcon} style={{color: white}} />
      <span className={style.titleLink}> {title} </span>
    </div>
  );
};

AssistanceLink.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AssistanceLink.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
};

const Question = ({header, answer, answerPrefix}) => (
  <div className={style.question}>
    <p
      className={classnames(style.questionHeader, style.innerHTML)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: header}}
    />
    <div className={style.answerWrapper}>
      <CheckIcon className={style.checkIcon} color="inherit" />
      {answerPrefix ? <span className={style.answerPrefix}>{answerPrefix}</span> : null}
      <span
        className={classnames(style.answer, style.innerHTML)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: answer}}
      />
    </div>
  </div>
);

Question.propTypes = {
  header: PropTypes.string,
  answerPrefix: PropTypes.string,
  answer: PropTypes.string
};

class PopinCorrection extends Component {
  static propTypes = {
    resources: Resources.propTypes.resources,
    overlay: ResourceBrowser.propTypes.overlay,
    assistanceLink: PropTypes.shape(AssistanceLink.propTypes),
    header: PropTypes.shape(omit(['animated'], Header.propTypes)),
    extraLifeGranted: Header.propTypes.extraLifeGranted,
    gameOver: Header.propTypes.gameOver,
    question: PropTypes.shape(Question.propTypes),
    klf: PropTypes.shape(SimpleText.propTypes),
    tips: PropTypes.shape(SimpleText.propTypes),
    onClick: Accordion.propTypes.onClick,
    quit: PropTypes.shape({
      cta: PropTypes.shape({
        ...Link.propTypes,
        title: PropTypes.string
      })
    }),
    onOpen: PropTypes.func,
    popinError: PropTypes.shape(CMPopin.propTypes)
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.initWrapper = this.initWrapper.bind(this);
  }

  componentDidMount() {
    this.deferOpen();
  }

  deferOpen() {
    clearTimeout(this.deferedOpen);

    this.deferedOpen = defer(() => {
      const {onOpen} = this.props;
      this.setState({open: true});
      onOpen && onOpen();
    });
  }

  initWrapper(wrapper) {
    this.wrapper = wrapper;
  }

  render() {
    const {
      header = {},
      extraLifeGranted,
      gameOver,
      question,
      overlay,
      resources,
      klf,
      tips,
      onClick,
      quit = {},
      assistanceLink = {},
      popinError
    } = this.props;

    const {open} = this.state;

    const {skin} = this.context;
    const primary = getOr('#f0f', 'common.primary', skin);

    const tabs = extractTabs({resources, klf, tips});
    const isLoading = isNil(header.failed);
    const className = open ? style.finalBackground : style.initialBackground;
    const {title, ...linkProps} = quit.cta || {};

    const quitCta =
      title || extraLifeGranted ? (
        <Link
          {...linkProps}
          style={{
            color: primary
          }}
          className={extraLifeGranted ? style.hideQuitCta : style.quitCta}
          data-name="nextLink"
          data-popin="popinCorrection"
          data-next="quit-with-extra-life"
        >
          {title}
        </Link>
      ) : null;

    return (
      <div ref={this.initWrapper} className={className} data-name="popinCorrection">
        {popinError ? <CMPopin {...popinError} /> : null}
        <div className={style.scrollWrapper}>
          <div className={isLoading ? style.loadingWrapper : style.wrapper}>
            <div className={isLoading ? style.loadingContent : style.content}>
              <Header
                {...header}
                gameOver={gameOver}
                extraLifeGranted={extraLifeGranted}
                animated
              />
              <Question {...question} />
              <Accordion tabProps={tabs} onClick={onClick} oneTabOnly>
                {isEmpty(getOr([], 'value', resources)) ? null : (
                  <Resources resources={resources} overlay={overlay} />
                )}
                {klf.value ? <SimpleText text={klf.value} /> : null}
                {tips.value ? <SimpleText text={tips.value} /> : null}
              </Accordion>
            </div>
            {quitCta}
            <AssistanceLink {...assistanceLink} />
          </div>
          {isLoading ? <Loader className={style.activeLoader} /> : null}
        </div>
      </div>
    );
  }
}

export default PopinCorrection;
