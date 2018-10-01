import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import defer from 'lodash/fp/defer';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import Cta from '../../../atom/cta';
import GameStatus from './status';
import Team from './status/team';
import Race from './race';
import style from './style.css';

const TopScreen = props => {
  const position = props.view === 'race' ? -100 : 0;
  const options = {stiffness: 120, damping: 22};
  const slide = props.slide !== null && (
    <div className={style.slideWrapper}>
      <SlidesPlayer questionBackgroundColor="transparent" {...props.slide} />
    </div>
  );

  return (
    <Motion
      defaultStyle={{
        x: 0,
        blurValue: 0,
        grayValue: 0
      }}
      style={{
        x: spring(position, options),
        blurValue: spring(100, options),
        grayValue: spring(100, options)
      }}
    >
      {({x, blurValue, grayValue}) => {
        return (
          <div
            className={style.topScreen}
            style={{
              filter: props.blur
                ? `blur(${3 * blurValue / 100}px) grayscale(${grayValue / 100})`
                : null
            }}
          >
            <div
              className={style.movingView}
              style={{
                left: `${x}%`
              }}
            >
              <div className={style.slide}>{slide}</div>
              <div className={style.towers}>
                <Race {...props} />
              </div>
            </div>
          </div>
        );
      }}
    </Motion>
  );
};
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {height: 0};
    this.initWrapper = this.initWrapper.bind(this);
  }

  componentDidMount() {
    this.deferOpen();
  }

  deferOpen() {
    clearTimeout(this.deferedOpen);

    this.deferedOpen = defer(() => {
      const height = this.element.clientHeight;
      this.setState({height});
    });
  }

  initWrapper(element) {
    this.element = element;
  }

  render() {
    const {team, goal, towers, cta, info, view} = this.props;

    const answerPopin = view === 'show-answer' && (
      <div className={style.answerPopin}>
        <span>{info.success ? 'good' : 'bad'}</span>
      </div>
    );

    return (
      <div className={style.game} ref={this.initWrapper}>
        <TopScreen {...this.props} />
        <GameStatus
          gray={this.props.blur}
          team={team}
          goal={goal}
          towers={towers}
          cta={cta}
          popUpMaxHeight={this.state.height}
        />
        {answerPopin}
      </div>
    );
  }
}

Game.propTypes = {
  view: PropTypes.oneOf(['question', 'race', 'show-answer']),
  blur: PropTypes.bool,
  slide: PropTypes.shape(SlidesPlayer.propTypes),
  towers: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOf(['placed', 'removed', 'new', 'lost']))
  ),
  cta: PropTypes.shape(Cta.propTypes),
  goal: PropTypes.number,
  team: PropTypes.shape(Team.propTypes),
  info: PropTypes.shape({
    success: PropTypes.bool,
    gameOver: PropTypes.bool
  })
};

export default Game;
