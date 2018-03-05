import test from 'ava';
import set from 'lodash/fp/set';
import fromPairs from 'lodash/fp/fromPairs';
import map from 'lodash/fp/map';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import popinEndFailStateFixture from './fixtures/popin-end/fail';
import popinEndSuccessStateFixture from './fixtures/popin-end/success';
import popinCorrectionExtraLifeStateFixture from './fixtures/popin-correction/popin-extra-life';
import slideStateFixture from './fixtures/player/slide';
import {_selectMapStateToVNode} from '..';

const createViews = pipe(map(name => [name, name]), fromPairs);
const views = createViews(['loading', 'player', 'popinCorrection', 'popinEnd']);

test('should open loading view when nextContent and route are undefined', t => {
  t.plan(3);

  const props = {};
  const stateWithoutRouteOrNextContent = omit(
    [['ui', 'route', 0], ['data', 'progressions', 'entities', 0, 'state', 'nextContent']],
    slideStateFixture
  );

  const createStateToProps = () => name => state => {
    t.is(name, 'loading');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'loading');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(stateWithoutRouteOrNextContent), props);
});

test('should open loading view when there is no current progression', t => {
  t.plan(3);

  const props = {};
  const stateWithoutCurrentProgression = omit('ui.current.progressionId', slideStateFixture);

  const createStateToProps = () => name => state => {
    t.is(name, 'loading');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'loading');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(stateWithoutCurrentProgression), props);
});

test('should open loading view when progression is currently moving forward', t => {
  t.plan(3);

  const props = {};
  const stateWithMovingProgression = set(['ui', 'movingProgression', 0], true, slideStateFixture);

  const createStateToProps = () => name => state => {
    t.is(name, 'loading');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'loading');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(stateWithMovingProgression), props);
});

test('should open popinEnd view when nextContent type is failure', t => {
  t.plan(3);

  const props = {};
  const createStateToProps = () => name => state => {
    t.is(name, 'popinEnd');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'popinEnd');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(popinEndFailStateFixture), props);
});

test('should open popinEnd view when nextContent type is success', t => {
  t.plan(3);

  const props = {};
  const createStateToProps = () => name => state => {
    t.is(name, 'popinEnd');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'popinEnd');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(popinEndSuccessStateFixture), props);
});

test('should open player view when nextContent type is slide', t => {
  t.plan(3);

  const props = {};
  const createStateToProps = () => name => state => {
    t.is(name, 'slide');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'player');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(slideStateFixture), props);
});

test('should open popin correction view when nextContent ref is extraLife', t => {
  t.plan(3);

  const props = {};
  const createStateToProps = () => name => state => {
    t.is(name, 'popinCorrection');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'popinCorrection');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(popinCorrectionExtraLifeStateFixture), props);
});

test('should open popin correction view when route is correction', t => {
  t.plan(3);

  const stateWithCorrectionRoute = set(['ui', 'route', 0], 'correction', slideStateFixture);
  const props = {};
  const createStateToProps = () => name => state => {
    t.is(name, 'popinCorrection');
    return props;
  };

  const createStateToVNode = (view, stateToProps) => state => {
    t.is(view, 'popinCorrection');
    return stateToProps(state);
  };

  const createProps = _selectMapStateToVNode(
    null,
    null,
    views,
    createStateToVNode,
    createStateToProps
  );

  return t.is(createProps(stateWithCorrectionRoute), props);
});
