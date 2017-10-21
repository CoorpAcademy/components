import React from 'react';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
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

class Clue extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {text} = nextProps;
    const isLoading = isEmpty(text);
    if (!isLoading) {
      return this.setState(() => {
        return {
          isLoading
        };
      });
    }
  }

  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    const {text, onClick} = this.props;
    onClick && onClick(e);
    const isLoading = isEmpty(text);
    return this.setState(() => {
      return {
        isLoading
      };
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
          <div className={style.back} style={inlineStyle}>
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

Clue.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

Clue.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Clue;
