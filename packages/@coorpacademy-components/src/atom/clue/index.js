import React from 'react';
import {get, isEmpty, noop} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Provider from '../provider';
import Loader from '../loader';
import Cta from '../cta';
import style from './style.css';

const LoadedClue = ({text}) => {
  return (
    <div data-name="text" className={style.clueText}>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: text}}
      />
    </div>
  );
};

LoadedClue.propTypes = {
  text: PropTypes.string
};

class Clue extends React.Component {
  static propTypes = {
    text: LoadedClue.propTypes.text,
    onClick: Cta.propTypes.onClick,
    starsDiff: PropTypes.number
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin,
    translate: Provider.childContextTypes.translate
  };

  static getDerivedStateFromProps(props) {
    const {text} = props;
    const isLoading = isEmpty(text);

    if (isLoading) return null;
    return {isLoading};
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {text, onClick = noop} = this.props;
    onClick(e);
    const isLoading = isEmpty(text);
    return this.setState({
      isLoading
    });
  }

  render() {
    const {text, starsDiff} = this.props;
    const {skin, translate} = this.context;
    const {isLoading} = this.state;
    const primaryColor = get('common.primary', skin);
    const inlineStyle = {backgroundColor: primaryColor};
    const starsToLoose = translate('clue_stars_to_loose', {count: Math.abs(starsDiff)});
    const seeClueCta = translate('See clue');

    return (
      <div data-name="clue" className={style.wrapperClue}>
        <div className={classnames(style.clueCard, !isEmpty(text) && style.flip)}>
          <div className={style.back} style={inlineStyle} data-name="clue-back-side">
            {isLoading ? <Loader /> : null}
            <div className={classnames(style.backContent, isLoading && style.loading)}>
              <div className={style.stars}>{starsToLoose}</div>
              <Cta submitValue={seeClueCta} secondary light onClick={this.handleClick} />
            </div>
          </div>
          <div className={style.front} style={inlineStyle}>
            <LoadedClue text={text} />
          </div>
        </div>
      </div>
    );
  }
}

export default Clue;
