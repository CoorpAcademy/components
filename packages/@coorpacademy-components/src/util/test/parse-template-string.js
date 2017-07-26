import test from 'ava';
import parseTemplateString from '../parse-template-string';

test('with single input', t => {
  t.deepEqual(parseTemplateString('{{inp81438}}'), [{type: 'answerField', value: 'inp81438'}]);
});

test('with no input', t => {
  t.deepEqual(parseTemplateString('Sure, no problem'), [
    {type: 'string', value: 'Sure, no problem'}
  ]);
});

test('with multiple inputs', t => {
  t.deepEqual(parseTemplateString('La réponse est {{inp81438}} {{sel31191}}'), [
    {type: 'string', value: 'La réponse est '},
    {type: 'answerField', value: 'inp81438'},
    {type: 'string', value: ' '},
    {type: 'answerField', value: 'sel31191'}
  ]);
});

test('with multiple inputs and trailing text', t => {
  t.deepEqual(parseTemplateString('La réponse est {{inp81438}} {{sel31191}}.'), [
    {type: 'string', value: 'La réponse est '},
    {type: 'answerField', value: 'inp81438'},
    {type: 'string', value: ' '},
    {type: 'answerField', value: 'sel31191'},
    {type: 'string', value: '.'}
  ]);
});
