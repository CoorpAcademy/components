import test from 'ava';
import {Choice} from '../../../../../types/progression-engine';
import {extractSelectedChoices} from '../index.native';

test('should return the selected choices ordered according to the given user choice order', t => {
  const label1 = 'bar baz';
  const label2 = 'foo bar';
  const label3 = 'toto tata';
  const label4 = 'foo bar baz';

  const choice1: Choice = {
    _id: '1',
    label: label1,
    value: 'barbaz'
  };

  const choice2: Choice = {
    _id: '2',
    label: label2,
    value: 'foobar'
  };

  const choice3: Choice = {
    _id: '3',
    label: label3,
    value: 'tototata'
  };

  const _userChoices = [label2, label1, label4];
  const _choices: Array<Choice> = [choice1, choice3, choice2];
  const expectedResult = [[choice2, choice1], [choice3]];
  const result = extractSelectedChoices(_choices, _userChoices);

  t.deepEqual(result, expectedResult);
});
