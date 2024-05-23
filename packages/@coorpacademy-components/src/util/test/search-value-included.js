import test from 'ava';
import searchValueIncluded from '../search-value-included';

test('should compare', t => {
  const skill = 'Creativity Practice';
  const value1 = 'CREA';
  const value2 = 'PRACTICEE';

  t.true(searchValueIncluded(skill, value1));
  t.false(searchValueIncluded(skill, value2));
});
