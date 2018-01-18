// @flow
import test from 'ava';
import selectInitialRule from '../select-initial-rule';

test('should return null if there are no rules', t => {
  const rule = selectInitialRule([]);
  t.is(rule, null);
});

test('should return null if there is no initial rule', t => {
  const rule = selectInitialRule([
    {
      source: {
        type: 'slide',
        ref: '1.A1.1'
      },
      destination: {
        type: 'slide',
        ref: '1.A1.2'
      },
      instructions: [],
      conditions: [],
      priority: 10
    }
  ]);
  t.is(rule, null);
});

test('should return the initial slide if present', t => {
  const initialRule = {
    source: {
      type: 'slide',
      ref: ''
    },
    destination: {
      type: 'slide',
      ref: '1.A1.1'
    },
    instructions: [],
    conditions: [],
    priority: 10
  };
  const randomRule = {
    source: {
      type: 'slide',
      ref: '1.A1.1'
    },
    destination: {
      type: 'slide',
      ref: '1.A1.2'
    },
    instructions: [],
    conditions: [],
    priority: 10
  };

  t.is(selectInitialRule([initialRule, randomRule]), initialRule);
  t.is(selectInitialRule([randomRule, initialRule]), initialRule);
});
