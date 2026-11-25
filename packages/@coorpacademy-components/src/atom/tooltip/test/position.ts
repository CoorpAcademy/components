import test from 'ava';
import forEach from 'lodash/fp/forEach';
import {getFloatingPosition} from '../position';

const viewport = {width: 1000, height: 800};
const anchor = {left: 490, right: 510, top: 390, bottom: 410, width: 20, height: 20};
const box = {width: 200, height: 100};

forEach(
  ([side, left, top]: readonly [string, number, number]) => {
    test(`preferred ${side} placement keeps an 8px gap`, t => {
      t.deepEqual(getFloatingPosition(anchor, box, viewport, side), {
        side,
        left,
        top,
        maxHeight: 100
      });
    });
  },
  [
    ['left', 282, 350],
    ['right', 518, 350],
    ['top', 400, 282],
    ['bottom', 400, 418]
  ] as const
);

test('flips left/right and top/bottom at viewport edges', t => {
  t.is(getFloatingPosition({...anchor, left: 5, right: 25}, box, viewport, 'left').side, 'right');
  t.is(
    getFloatingPosition({...anchor, left: 975, right: 995}, box, viewport, 'right').side,
    'left'
  );
  t.is(getFloatingPosition({...anchor, top: 5, bottom: 25}, box, viewport, 'top').side, 'bottom');
  t.is(
    getFloatingPosition({...anchor, top: 775, bottom: 795}, box, viewport, 'bottom').side,
    'top'
  );
});

test('sixty-item content gets a scroll height inside a short viewport', t => {
  const result = getFloatingPosition(
    {left: 180, right: 200, top: 70, bottom: 90, width: 20, height: 20},
    {width: 400, height: 4000},
    {width: 390, height: 180},
    'left'
  );
  t.is(result.side, 'bottom');
  t.is(result.maxHeight, 70);
  t.true(result.left >= 12);
  t.true(result.top + result.maxHeight <= 168);
});

test('chooses more room above and clamps a wide panel away from both screen edges', t => {
  const result = getFloatingPosition(
    {left: 10, right: 30, top: 100, bottom: 120, width: 20, height: 20},
    {width: 1000, height: 4000},
    {width: 390, height: 180},
    'right'
  );
  t.is(result.side, 'top');
  t.is(result.left, 12);
  t.is(result.top, 12);
  t.is(result.maxHeight, 80);
});
