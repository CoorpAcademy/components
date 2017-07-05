import test from 'ava';
import createMapStateToProps from '../header';
import state from '../../test/fixtures/progression-state';

const translate = key => `__${key}`;
const commonOptions = {
  translate
};

const mapStateToProps = createMapStateToProps(commonOptions);

test('should provide default props to init state', t => {
  const props = mapStateToProps(state);
  t.deepEqual(props.primary, {title: 'Les réseaux sociaux au service du crowdfunding'});
  t.deepEqual(props.lives, {count: 3});
});
