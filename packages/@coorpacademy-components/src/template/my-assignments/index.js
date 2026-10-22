import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Title from '../../atom/title';
import Tabs from '../../molecule/tabs';
import Loader from '../../atom/loader';
import Link from '../../atom/link';
import FaIcon from '../../atom/icon';
import Tag from '../../atom/tag';
import {COLORS} from '../../variables/colors';
import AssignmentCard from '../../molecule/assignment-card';
import style from './style.css';

// To do is split by due date, always in this order (N4). "Later" is gone.
const SECTIONS = {
  overdue: {iconName: 'triangle-exclamation', color: COLORS.cm_negative_200},
  dueThisWeek: {iconName: 'clock', color: COLORS.cm_yellow_400},
  dueAfterThisWeek: {iconName: 'circle', color: COLORS.cm_grey_500}
};
const SECTION_KEYS = ['overdue', 'dueThisWeek', 'dueAfterThisWeek'];

const GridCard = ({card, onCardClick}) => {
  const handleClick = useCallback(event => onCardClick(card, event), [card, onCardClick]);
  return <AssignmentCard {...card} onClick={onCardClick ? handleClick : card.onClick} />;
};

GridCard.propTypes = {
  card: PropTypes.shape(AssignmentCard.propTypes),
  onCardClick: PropTypes.func
};

const Grid = ({cards, onCardClick, 'data-name': dataName}) => (
  <div className={style.grid} data-name={dataName}>
    {cards.map((card, index) => (
      <GridCard key={index} card={card} onCardClick={onCardClick} />
    ))}
  </div>
);

Grid.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(AssignmentCard.propTypes)),
  onCardClick: PropTypes.func,
  'data-name': PropTypes.string
};

const DueSection = ({sectionKey, title, subtitle, count, cards, onCardClick}) => {
  const {iconName, color} = SECTIONS[sectionKey];
  return (
    <section className={style.section} data-name="due-section" data-key={sectionKey}>
      <div className={style.sectionHead}>
        <FaIcon iconName={iconName} iconColor={color} size={{faSize: 16, wrapperSize: 16}} />
        <h2 className={style.sectionTitle}>{title}</h2>
        <Tag label={String(count)} size="S" />
        {subtitle ? <span className={style.sectionSubtitle}>{subtitle}</span> : null}
      </div>
      <Grid cards={cards} onCardClick={onCardClick} />
    </section>
  );
};

DueSection.propTypes = {
  sectionKey: PropTypes.oneOf(SECTION_KEYS),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  count: PropTypes.number,
  cards: Grid.propTypes.cards,
  onCardClick: PropTypes.func
};

// « Assigned to you » at /assigned (N4): two tabs, To do (not started + in progress) in three
// due-date sections, and Finished as a flat grid. The MOOC sorts every list; lateness is never
// shown (L0) and no assignment is ever named (L5).
const MyAssignments = ({
  title,
  tabs = [],
  sections = [],
  cards = [],
  emptyState,
  loading = false,
  onCardClick
}) => {
  const selectedTab = tabs.find(tab => tab.selected);
  const isTodo = !selectedTab || selectedTab.key === 'todo';
  const visibleSections = SECTION_KEYS.map(key =>
    sections.find(section => section.key === key)
  ).filter(section => section && section.cards.length > 0);
  const isEmpty = isTodo ? visibleSections.length === 0 : cards.length === 0;

  const handleEmptyLinkClick = emptyState && emptyState.link && emptyState.link.onClick;

  let panel;
  if (loading) {
    panel = <Loader />;
  } else if (isEmpty) {
    panel = emptyState ? (
      <div className={style.empty} data-name="empty-state">
        <h2 className={style.emptyTitle}>{emptyState.title}</h2>
        <p className={style.emptyMessage}>{emptyState.message}</p>
        {emptyState.link ? (
          <Link
            className={style.emptyLink}
            href={emptyState.link.href}
            onClick={handleEmptyLinkClick}
          >
            {emptyState.link.label}
          </Link>
        ) : null}
      </div>
    ) : null;
  } else if (isTodo) {
    panel = visibleSections.map(section => (
      <DueSection
        key={section.key}
        sectionKey={section.key}
        title={section.title}
        subtitle={section.subtitle}
        count={section.count}
        cards={section.cards}
        onCardClick={onCardClick}
      />
    ));
  } else {
    panel = <Grid cards={cards} onCardClick={onCardClick} data-name="finished-grid" />;
  }

  return (
    <div className={style.backgroundContainer}>
      <div className={style.container}>
        {title ? <Title type="page" title={title} /> : null}
        <Tabs
          compact
          items={tabs.map(({key, label, count, selected, onClick}) => ({
            key,
            title: label,
            count,
            isActive: selected,
            onClick
          }))}
        />
        <div role="tabpanel" aria-label={selectedTab && selectedTab.label} aria-busy={loading}>
          {panel}
        </div>
      </div>
    </div>
  );
};

MyAssignments.propTypes = {
  // « Assigned to you »
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(['todo', 'done']).isRequired,
      label: PropTypes.string,
      count: PropTypes.number,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  ),
  // To do: Overdue / Due this week / Due after this week. An empty section is not rendered.
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(SECTION_KEYS).isRequired,
      title: PropTypes.string,
      // A date range label, e.g. "Wed 21 Oct – Wed 28 Oct"
      subtitle: PropTypes.string,
      // Every module of the section, whatever the number of cards loaded
      count: PropTypes.number.isRequired,
      cards: Grid.propTypes.cards.isRequired
    })
  ),
  // Finished: most recently finished first (D1)
  cards: Grid.propTypes.cards,
  loading: PropTypes.bool,
  // The empty state of the selected tab
  emptyState: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    link: PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func
    })
  }),
  // Receives the card's content and the click event
  onCardClick: PropTypes.func
};

export default MyAssignments;
