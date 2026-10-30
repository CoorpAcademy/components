import test from 'ava';
import React from 'react';
import PropTypes from 'prop-types';
import sinon from 'sinon';
import {forEach} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyClockTime as AssignmentsIcon,
  NovaSolidContentContentBookAdd as CockpitIcon,
  NovaSolidUsersActionsUser as ManageUserIcon,
  NovaSolidFilesBasicFileUpload2 as UploadUserIcon,
  NovaSolidEmailAtSign as ManageEmailIcon,
  NovaSolidDesignPaintBrush2 as LookAndFeelIcon,
  NovaSolidContentContentViewList as DashboardIcon,
  NovaSolidContentEditionFlash as MassiveBattleIcon,
  NovaSolidApplicationsWindowApplication5 as CmsIcon,
  NovaSolidBusinessBusinessGraphLine2 as AnalyticsIcon,
  NovaCompositionCoorpacademyOpenInNewTab as NewTabIcon,
  NovaLinePhoneMobilePhone as MobilePhone,
  NovaLineMessagesChatChatBubbleCircleQuestionMark as ChatBubbleCircleQuestionMark,
  NovaLineNetworkNetworkAlert as NetworkAlert,
  NovaLineObjectsBinoculars as Binoculaire,
  NovaLineContentEditionContentBook as ContentBook
} from '@coorpacademy/nova-icons';
import Link from '../../../atom/link';
import FaIcon from '../../../atom/icon';
import {COLORS} from '../../../variables/colors';
import {renderComponent} from '../../../test/helpers/render-component';
import QuickAccessCard from '..';
import style from '../style.css';
import assignments from './fixtures/assignments';
import defaultFixture from './fixtures/default';
import analytics from './fixtures/analytics';
import binoculaire from './fixtures/binoculaire';
import book from './fixtures/book';
import chatBubbleQuestion from './fixtures/chat-bubble-question';
import lookAndFeel from './fixtures/look-and-feel';
import massiveBattle from './fixtures/massive-battle';
import mobilePhone from './fixtures/mobile-phone';
import network from './fixtures/network';
import uploadUsers from './fixtures/upload-users';

const elements = tree => {
  if (!React.isValidElement(tree)) return [];
  return [tree, ...React.Children.toArray(tree.props.children).flatMap(elements)];
};

const byClass = (tree, className) => elements(tree).find(el => el.props.className === className);

const assertPalette = (t, tree, background, hue, mooc = false) => {
  t.deepEqual(byClass(tree, style.iconFeatureWrapper).props.style, {backgroundColor: background});
  const content = byClass(tree, style.content);
  const ctaWrapper = React.Children.only(byClass(tree, style.cta).props.children);
  const hover = React.Children.only(ctaWrapper.props.children);
  if (mooc) {
    t.is(content.props.style, null);
    t.is(ctaWrapper.props.className, null);
    t.is(ctaWrapper.props.style, null);
    t.is(hover.props.className, style.hoverMooc);
    t.deepEqual(hover.props.style, {color: '#FFFFFF'});
    return;
  }
  t.deepEqual(ctaWrapper.props.style, {backgroundColor: background});
  t.is(ctaWrapper.props.className, style.iconGotoWrapper);
  t.is(hover.props.className, style.hover);
  t.deepEqual(hover.props.style, {color: background});
  const gradient = content.props.style.background.replace(/\s+/g, ' ').trim();
  t.is(
    gradient,
    `radial-gradient(62.12% 56.45% at 0% 77.29%, hsl(${hue}deg 68% 40% / 20%) 0%, hsl(${hue}deg 68% 40% / 0%) 100%), radial-gradient(113.85% 103.46% at 93.27% 7.88%, hsl(${hue}deg 67% 51% / 15%) 0%, hsl(${hue}deg 67% 51% / 0%) 100%), radial-gradient(49.66% 49.63% at 78.65% 86.26%, hsl(${hue}deg 87% 91%) 0%, hsl(${hue}deg 87% 91% / 0%) 100%), #FAFAFA`
  );
};

test.serial('assignments is an accepted feature', t => {
  const warning = sinon.stub(console, 'error');
  try {
    PropTypes.resetWarningCache();
    PropTypes.checkPropTypes(
      QuickAccessCard.propTypes,
      assignments.props,
      'prop',
      'QuickAccessCard'
    );
    t.false(warning.called);
    PropTypes.checkPropTypes(
      QuickAccessCard.propTypes,
      {...assignments.props, feature: 'unknown-feature'},
      'prop',
      'QuickAccessCard'
    );
    t.true(warning.calledOnce);
    t.regex(warning.firstCall.args[0], /Invalid prop `feature`/);
  } finally {
    warning.restore();
    PropTypes.resetWarningCache();
  }
});

test('assignments renders its deadline icon and orange palette', t => {
  const tree = QuickAccessCard(assignments.props, {});
  t.is(tree.props['data-type'], 'assignments');
  const icon = elements(tree).find(el => el.type === AssignmentsIcon);
  t.truthy(icon);
  t.is(icon.props.className, style.iconFeature);
  t.deepEqual(icon.props.style, {color: null});
  assertPalette(t, tree, '#FF7043', '14');
});

test('assignments preserves supplied copy and link options', t => {
  const props = {...assignments.props, title: 'Team assignments', description: 'Due next week'};
  const tree = QuickAccessCard(props, {});
  t.is(React.Children.toArray(byClass(tree, style.title).props.children)[0], props.title);
  t.is(byClass(tree, style.description).props.children, props.description);
  const link = elements(tree).find(el => el.type === Link);
  t.is(link.props.href, props.href);
  t.is(link.props.target, '_self');
  t.false(elements(tree).some(el => el.type === NewTabIcon));
  const newTabTree = QuickAccessCard({...props, openInNewTab: true}, {});
  const newTabLink = elements(newTabTree).find(el => el.type === Link);
  t.is(newTabLink.props.href, props.href);
  t.is(newTabLink.props.target, '_blank');
  t.is(elements(newTabTree).find(el => el.type === NewTabIcon).props.className, style.newTabIcon);
});

forEach(
  ({name, copy}) => {
    test(`assignments tolerates optional copy: ${name}`, t => {
      const tree = QuickAccessCard({feature: 'assignments', ...copy}, {});
      t.is(tree.props['data-type'], 'assignments');
      t.is(byClass(tree, style.title).props.children[0], copy.title);
      t.is(byClass(tree, style.description).props.children, copy.description);
      t.truthy(elements(tree).find(el => el.type === AssignmentsIcon));
      const link = elements(tree).find(el => el.type === Link);
      t.is(link.props.href, undefined);
      t.is(link.props.target, '_self');
      t.false(elements(tree).some(el => el.type === NewTabIcon));
      assertPalette(t, tree, '#FF7043', '14');
    });
  },
  [
    {name: 'omitted', copy: {}},
    {name: 'empty strings', copy: {title: '', description: ''}},
    {name: 'null', copy: {title: null, description: null}}
  ]
);

test('assignments renders literal copy and a complete destination link', t => {
  const props = {
    ...assignments.props,
    title: 'Équipe <2026> & échéances ⏰',
    description: '<script>alert("due")</script> & progress > 50%',
    href: '/brands/7steps/editorialization/assignments/active?team=R%26D&sort=due#upcoming',
    openInNewTab: false,
    isMoocCard: false
  };
  const container = document.createElement('div');
  container.innerHTML = renderComponent(t, QuickAccessCard, {props});
  t.is(
    container.querySelector('[data-type="assignments"]').textContent,
    props.title + props.description
  );
  t.is(container.querySelectorAll('script').length, 0);
  const links = container.querySelectorAll('a');
  t.is(links.length, 1);
  t.is(links[0].getAttribute('href'), props.href);
  t.is(links[0].getAttribute('target'), '_self');
  const tree = QuickAccessCard(props, {});
  t.false(elements(tree).some(el => el.type === NewTabIcon));
  assertPalette(t, tree, '#FF7043', '14');
});

const legacyExpectations = [
  ['manage_users', ManageUserIcon, '#2EC1D6', '187', null],
  ['upload_users', UploadUserIcon, '#2EC1D6', '187', null],
  ['look_and_feel', LookAndFeelIcon, '#18BB98', '167', null],
  ['dashboard', DashboardIcon, '#18BB98', '167', null],
  ['cockpit', CockpitIcon, '#FF7043', '14', null],
  ['manage_email', ManageEmailIcon, '#7340FF', '256', null],
  ['massive_battle', MassiveBattleIcon, '#7340FF', '256', null],
  ['cms', CmsIcon, '#7340FF', '256', null],
  ['learning_priorities', FaIcon, '#7340FF', '256', 'white'],
  ['analytics', AnalyticsIcon, '#FF4040', '0', null],
  ['binoculaire', Binoculaire, '#FFEFEB', '0', '#FF541F'],
  ['book', ContentBook, '#F1F6FE', '0', COLORS.cm_primary_blue],
  ['network', NetworkAlert, '#FFE5E6', '0', '#FF0A0A'],
  ['chat-bubble-question', ChatBubbleCircleQuestionMark, '#E8FCF8', '0', '#16AC8C'],
  ['mobile-phone', MobilePhone, '#F4F0FF', '0', '#5C21FF']
];

const assertLegacy = (t, props, expectation) => {
  const [feature, Icon, background, hue, color] = expectation;
  const tree = QuickAccessCard(props, {});
  t.is(tree.props['data-type'], feature);
  const icon = byClass(tree, style.iconFeature);
  t.is(icon.type, Icon);
  if (feature === 'learning_priorities') {
    t.is(icon.props.iconName, 'sign-post');
    t.is(icon.props.iconColor, 'white');
  } else {
    t.deepEqual(icon.props.style, {color});
  }
  assertPalette(t, tree, background, hue, props.isMoocCard);
};

forEach(expectation => {
  const [feature] = expectation;
  test(`every existing feature retains its icon and palette: ${feature}`, t => {
    assertLegacy(t, {...assignments.props, feature}, expectation);
  });
}, legacyExpectations);

const legacyFixtures = [
  defaultFixture,
  analytics,
  binoculaire,
  book,
  chatBubbleQuestion,
  lookAndFeel,
  massiveBattle,
  mobilePhone,
  network,
  uploadUsers
];

forEach(fixture => {
  const {feature, isMoocCard} = fixture.props;
  const name = isMoocCard
    ? 'legacy MOOC fixtures retain their solid presentation'
    : 'legacy fixtures retain their presentation';
  test(`${name}: ${feature}`, t => {
    const expectation = legacyExpectations.find(([value]) => value === feature);
    if (
      ['binoculaire', 'book', 'network', 'chat-bubble-question', 'mobile-phone'].includes(feature)
    ) {
      t.true(isMoocCard);
    }
    assertLegacy(t, fixture.props, expectation);
  });
}, legacyFixtures);
