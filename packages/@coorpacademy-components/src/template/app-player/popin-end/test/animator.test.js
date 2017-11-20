import test from 'ava';
import React from 'react';
import identity from 'lodash/fp/identity';
import {render} from 'enzyme';
import Animator from '../animator';
import correctFixture from './fixtures/correct';

const TestApp = props => {
  const {ChildType, ...childProps} = props;

  return (
    <Animator startTimer={identity} stopTimer={identity}>
      <ChildType {...childProps} />
    </Animator>
  );
};

test('should not add rank and stars if not present in original props', t => {
  let latestProps = {};
  const TestChild = props => {
    latestProps = props;
    return <div />;
  };

  render(<TestApp ChildType={TestChild} />);

  t.false('stars' in latestProps.summary.header);
  t.false('rank' in latestProps.summary.header);
});

test('should initialize rank and stars to 0', t => {
  let latestProps = {};
  const TestChild = props => {
    latestProps = props;
    return <div />;
  };

  render(<TestApp ChildType={TestChild} {...correctFixture.props} />);

  t.is(latestProps.summary.header.stars, '+0');
  t.is(latestProps.summary.header.rank, '+0');
});
