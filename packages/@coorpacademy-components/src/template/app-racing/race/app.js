import React, {Component} from 'react';
import compact from 'lodash/fp/compact';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import Race from './race';

const mapNoCap = map.convert({cap: false});

const updateRemovingAnimation = dt => block => {
  if (!block.removing) {
    return block;
  }

  const cursor = block.removing.cursor + dt;

  if (cursor >= block.removing.duration) {
    return null;
  }

  return set(
    'removing',
    {
      cursor,
      duration: block.removing.duration
    },
    block
  );
};

class App extends Component {
  state = {
    towers: [
      {
        position: 0,
        color: '#ff0000',
        blocks: [
          {velocity: 0, stage: 0, removing: {cursor: 0, duration: 800}},
          {velocity: 0, stage: 1},
          {velocity: 0, stage: 2},
          {velocity: 0, stage: 3},
          {velocity: 0, stage: 40},
          {velocity: 0, stage: 50}
        ]
      },
      {
        position: 1,
        color: '#00ff00',
        blocks: [
          {velocity: 0, stage: 0},
          {velocity: 0, stage: 1},
          {velocity: 0, stage: 2},
          {velocity: 0, stage: 3},
          {velocity: 0, stage: 4},
          {velocity: 0, stage: 5},
          {velocity: 0, stage: 6},
          {velocity: 0, stage: 25}
        ]
      },
      {
        position: 2,
        color: '#00ffff',
        blocks: [
          {velocity: 0, stage: 0},
          {velocity: 0, stage: 25},
          {velocity: 0, stage: 30},
          {velocity: 0, stage: 50}
        ]
      }
    ]
  };

  componentDidMount() {
    this.requestAnimationFrame();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }

  onAnimationFrame(dt) {
    const nextState = set(
      'towers',
      map(
        tower =>
          set(
            'blocks',
            compact(
              mapNoCap((block, index) => {
                const lastElementStage = index === 0 ? -1 : tower.blocks[index - 1].stage;

                let nextVelocity = block.velocity >= 0.1 ? 0.1 : block.velocity + 0.00006 * dt;
                let nextStage = block.stage - nextVelocity * dt;

                if (nextStage < lastElementStage + 1) {
                  nextStage = lastElementStage + 1;
                  nextVelocity = 0;
                }

                return pipe(
                  set('stage', nextStage),
                  set('velocity', nextVelocity),
                  updateRemovingAnimation(dt)
                )(block);
              }, tower.blocks)
            ),
            tower
          ),
        this.state.towers
      ),
      this.state
    );

    this.setState(nextState);
  }

  requestAnimationFrame() {
    this.requestId = window.requestAnimationFrame(() => {
      const now = Date.now();

      this.onAnimationFrame(this.lastFrameTime ? now - this.lastFrameTime : 0);
      this.requestAnimationFrame();
      this.lastFrameTime = now;
    });
  }

  render() {
    return <Race {...this.state} {...this.props} />;
  }
}

export default App;
