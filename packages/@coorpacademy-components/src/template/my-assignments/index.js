import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atom/title';
import Tabs from '../../molecule/tabs';
import Loader from '../../atom/loader';
import AssignmentCard from '../../molecule/assignment-card';
import style from './style.css';

const MyAssignments = ({
  title,
  tabs = [],
  cards = [],
  emptyState,
  loading = false,
  onCardClick
}) => {
  const selectedTab = tabs.find(tab => tab.selected);
  let panel = null;
  if (loading) {
    panel = <Loader />;
  } else if (cards.length > 0) {
    panel = (
      <div className={style.cards}>
        {cards.map((card, index) => (
          <AssignmentCard
            {...card}
            key={index}
            onClick={card.onClick || (onCardClick ? event => onCardClick(card, event) : undefined)}
          />
        ))}
      </div>
    );
  } else if (emptyState) {
    panel = (
      <div className={style.empty}>
        <h2>{emptyState.title}</h2>
        <p>{emptyState.message}</p>
      </div>
    );
  }
  return (
    <div className={style.backgroundContainer}>
      <div className={style.container}>
        {title ? <Title type="page" title={title} /> : null}
        <Tabs
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
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(['todo', 'inProgress', 'done']).isRequired,
      label: PropTypes.string,
      count: PropTypes.number,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  ),
  cards: PropTypes.arrayOf(PropTypes.shape(AssignmentCard.propTypes)),
  loading: PropTypes.bool,
  emptyState: PropTypes.shape({title: PropTypes.string, message: PropTypes.string}),
  onCardClick: PropTypes.func
};

export default MyAssignments;
