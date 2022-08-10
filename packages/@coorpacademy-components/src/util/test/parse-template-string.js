import test from 'ava';
import parseTemplateString from '../parse-template-string';

test('with empty template', t => {
  t.deepEqual(parseTemplateString(''), []);
});

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

test('with multiple inputs, middle and trailing text', t => {
  t.deepEqual(parseTemplateString('{{inp123}} is {{sel456}}!'), [
    {type: 'answerField', value: 'inp123'},
    {type: 'string', value: ' is '},
    {type: 'answerField', value: 'sel456'},
    {type: 'string', value: '!'}
  ]);
});

test('with <br>', t => {
  t.deepEqual(parseTemplateString('{{inp123}}<br>is {{sel456}}<br />but {{inp789}}<br/>is good!'), [
    {type: 'answerField', value: 'inp123'},
    {type: 'string', value: '<br>is '},
    {type: 'answerField', value: 'sel456'},
    {type: 'string', value: '<br>but '},
    {type: 'answerField', value: 'inp789'},
    {type: 'string', value: '<br>is good!'}
  ]);
});
