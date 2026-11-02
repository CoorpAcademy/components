import test from 'ava';
import React from 'react';
import PropTypes from 'prop-types';
import sinon from 'sinon';
import {NovaCompositionCoorpacademyClockTime as AssignmentsIcon} from '@coorpacademy/nova-icons';
import QuickAccessCard from '..';
import style from '../style.css';
import assignments from './fixtures/assignments';

const elements = tree =>
  React.isValidElement(tree)
    ? [tree, ...React.Children.toArray(tree.props.children).flatMap(elements)]
    : [];

test.serial('assignments is an accepted feature', t => {
  const warning = sinon.stub(console, 'error');
  try {
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(QuickAccessCard.propTypes, assignments.props, 'prop', 'Card');
    t.false(warning.called);
  } finally {
    warning.restore();
  }
});

test('assignments renders the clock icon on the cockpit palette', t => {
  const tree = QuickAccessCard(assignments.props, {});
  const cockpit = QuickAccessCard({...assignments.props, feature: 'cockpit'}, {});
  const iconWrapper = card =>
    elements(card).find(el => el.props.className === style.iconFeatureWrapper);

  t.is(tree.props['data-type'], 'assignments');
  t.truthy(elements(tree).find(el => el.type === AssignmentsIcon));
  t.deepEqual(iconWrapper(tree).props.style, iconWrapper(cockpit).props.style);
  t.deepEqual(iconWrapper(tree).props.style, {backgroundColor: '#FF7043'});
});
