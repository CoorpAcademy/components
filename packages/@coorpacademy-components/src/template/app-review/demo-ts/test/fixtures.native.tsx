import test from 'ava';
import renderReactNativeComponentMacro from '../../../../test/helpers/render-native-component';
import TemplateAppReviewDemoTs from '../index.native';
import fixtureDefaultTs from './fixtures/default';

test('-> with macro', renderReactNativeComponentMacro, TemplateAppReviewDemoTs, fixtureDefaultTs);
