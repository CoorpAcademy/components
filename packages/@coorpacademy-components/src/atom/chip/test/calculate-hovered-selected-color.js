import test from 'ava';
import browserEnv from 'browser-env';
import {calculateHoveredSelectedBgColor} from '..';

browserEnv();

test('calculateHoveredSelectedBgColor with default luminosity delta', t => {
  t.is(calculateHoveredSelectedBgColor('#0000FF'), 'hsl(from #0000FF h s calc(l*(1 - 0.08)))');
  // ≅ hsl(240 100% 46%)
});

test('calculateHoveredSelectedBgColor with custom luminosity delta', t => {
  t.is(calculateHoveredSelectedBgColor('#0000FF', 0.2), 'hsl(from #0000FF h s calc(l*(1 - 0.2)))');
  // ≅  hsl(240 100% 40%)
});
