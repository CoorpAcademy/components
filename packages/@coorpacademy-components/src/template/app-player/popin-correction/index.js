import React, {Component} from 'react';
import PropTypes from 'prop-types';
import defer from 'lodash/fp/defer';
import isNil from 'lodash/fp/isNil';
import isEmpty from 'lodash/fp/isEmpty';
import getOr from 'lodash/fp/getOr';
import omit from 'lodash/fp/omit';
import CheckIcon from '@coorpacademy/nova-icons/composition/coorpacademy/check';
import Loader from '../../../atom/loader';
import Link from '../../../atom/link';
import ResourceBrowser from '../../../organism/resource-browser';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import Accordion from '../../../organism/accordion/container';
import style from './style.css';

const extractTabs = items =>
  Object.keys(items).map(type => {
    const item = items[type];
    return {iconType: type, title: item.title, isOpen: item.open};
  });

const Resources = ({resources}) => (
  <div className={style.browserWrapper}>
    <ResourceBrowser resources={resources.value} className={style.browser} />
  </div>
);

const SimpleText = ({text}) => (
  <div data-name="simpleText" className={style.simpleTextWrapper}>
    <p
      className={style.simpleText}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: text
      }}
    />
  </div>
);

SimpleText.propTypes = {
  text: PropTypes.string
};

const Question = ({header, answer, answerPrefix}) => (
  <div className={style.question}>
    <p
      className={style.questionHeader}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: header
      }}
    />
    <div className={style.answerWrapper}>
      <CheckIcon className={style.checkIcon} color="inherit" />
      {answerPrefix ? <span className={style.answerPrefix}>{answerPrefix}</span> : null}
      <span
        className={style.answer}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: answer
        }}
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
      this.setState({open: true});
      this.props.onOpen && this.props.onOpen();
    });
  }

  initWrapper(wrapper) {
    this.wrapper = wrapper;
  }

  render() {
    const {header = {}, question, resources, klf, tips, onClick, joker} = this.props;

    const tabs = extractTabs({resources, klf, tips});
    const isLoading = isNil(header.fail);
    const className = this.state.open ? style.openOverlay : style.overlay;

    const jokerCta = header.extraLife ? (
      <div className={isLoading ? style.loadingContent : style.ctaJoker}>
        <Link data-name="nextLink" href={joker.href}>
          {joker.title}
        </Link>
      </div>
    ) : null;

console.log(header.extraLife);
    return (
      <div ref={this.initWrapper} className={className} data-name="popinCorrection">
        <div className={style.scrollWrapper}>
          <div className={isLoading ? style.loadingWrapper : style.wrapper}>
            <div className={isLoading ? style.loadingContent : style.content}>
              <PopinHeader {...header} animated />
              <Question {...question} />
              <Accordion tabProps={tabs} onClick={onClick} oneTabOnly>
                {isEmpty(getOr([], 'value', resources)) ? null : (
                  <Resources resources={resources} />
                )}
                <SimpleText text={klf.value} />
                <SimpleText text={tips.value} />
              </Accordion>
            </div>
            {jokerCta}
          </div>
          <Loader className={isLoading ? style.activeLoader : style.inactiveLoader} />
        </div>
      </div>
    );
  }
}

PopinCorrection.propTypes = {
  resources: PropTypes.shape(ResourceBrowser.propTypes),
  header: PropTypes.shape(omit(['animated'], PopinHeader.propTypes)),
  question: PropTypes.shape(Question.propTypes),
  klf: PropTypes.shape(SimpleText.propTypes),
  tips: PropTypes.shape(SimpleText.propTypes),
  onClick: PropTypes.func,
  joker: PropTypes.shape({title: PropTypes.string, href: PropTypes.string}),
  onOpen: PropTypes.func
};

export default PopinCorrection;
