import React, {Component} from 'react';
import defer from 'lodash/fp/defer';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import {Motion, spring} from 'react-motion';
import classnames from 'classnames';
import animation from '../../atom/css-animations/fade-in.css';
import style from './team.css';

const ResponseResult = ({isCorrect, color}) => {
  const textStyle = isCorrect === true ? style.textCorrect : style.textNotCorrect;

  return (
    <div className={style.responseResult}>
      <span className={classnames(style.textResult, textStyle)}>
        {`${isCorrect ? '+' : '-'} 1`}
      </span>
    </div>
  );
};

const Player = ({name, avatar, borderStyle}) => (
  <div
    title={name}
    className={classnames(style.avatar, borderStyle, animation.fadeIn)}
    key={name}
    style={{
      backgroundImage: `url(${avatar})`
    }}
  />
);
class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.initWrapper = this.initWrapper.bind(this);
  }

  componentDidMount() {
    this.deferOpen();
  }

  deferOpen() {
    clearTimeout(this.deferedOpen);

    this.deferedOpen = defer(() => {
      const width = this.element.clientWidth;
      this.setState({width});
    });
  }

  initWrapper(element) {
    this.element = element;
  }

  render() {
    const count = {
      nbNull: 0,
      nbAnswered: 0
    };

    return (
      <div ref={this.initWrapper} className={style.team}>
        {map(({name, avatar, isCorrect}) => {
          if (isNull(isCorrect)) {
            count.nbNull++;
          } else {
            count.nbAnswered++;
          }

          // eslint-disable-next-line no-nested-ternary
          const borderStyle = isNull(isCorrect)
            ? null
            : isCorrect === true ? style.correct : style.notCorrect;

          const score = !isNull(isCorrect) ? (
            <ResponseResult key={`result-${name}`} isCorrect={isCorrect} color={this.props.num} />
          ) : null;

          const position = isNull(isCorrect)
            ? this.state.width - 50 - (count.nbNull - 1) * 35
            : (count.nbAnswered - 1) * 35;

          return (
            <Motion
              defaultStyle={{x: 0}}
              style={{x: spring(position, {stiffness: 40, damping: 22})}}
            >
              {({x}) => {
                return (
                  <div className={style.player} style={{left: `${x}px`}}>
                    {score}
                    <Player key={name} name={name} avatar={avatar} borderStyle={borderStyle} />
                  </div>
                );
              }}
            </Motion>
          );
        }, this.props.members)}
      </div>
    );
  }
}

export default Team;
