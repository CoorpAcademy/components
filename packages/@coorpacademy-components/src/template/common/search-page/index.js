import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {getOr, isEmpty, keys, map, pipe, size, sortBy} from 'lodash/fp';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import Filters from '../../../molecule/filters';
import CardsGrid from '../../../organism/cards-grid';
import CardsList from '../../../molecule/dashboard/cards-list';
import CertificationCard from '../../../molecule/certification-card';
import LearnerSkillCard from '../../../molecule/learner-skill-card';
import PlaylistCard from '../../../molecule/playlist-card';
import CMPopin from '../../../molecule/cm-popin';
import Tag from '../../../atom/tag';
import {cardPropTypes} from '../../../molecule/card';
import LearningPriorityCard from '../../../molecule/learning-priority-card';
import {COLORS} from '../../../variables/colors';
import QuickFilters from '../../../molecule/quick-filters';
import style from './style.css';

const SearchPage = (props, context) => {
  const {
    title,
    searchFilters,
    quickFilters,
    cards,
    count,
    noresultsfound,
    clearFilters,
    recommendations,
    moreSortAriaLabel,
    moreFilterAriaLabel,
    filterGroupAriaLabel,
    sortAriaLabel,
    popinWithCards,
    sections = {}
  } = props;
  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);
  const nodeRef = useRef(null);
  const recommendationsView = isEmpty(recommendations) ? null : <CardsList {...recommendations} />;

  // Helper function to render content sections
  const renderSection = section => {
    if (!section || isEmpty(section.cards)) return null;

    // Use count from props, fallback to cards.length
    const sectionCount = section.count || section.cards.length;

    // Create title with count tag
    const titleWithCount = (
      <div className={style.sectionTitle}>
        <span data-name="section-title">{section.title}</span>
        <Tag
          label={sectionCount.toString()}
          type="default"
          size="S"
          customStyle={{backgroundColor: COLORS.cm_grey_100, color: COLORS.neutral_500}}
        />
      </div>
    );

    const sectionProps = {
      ...section,
      title: titleWithCount,
      dataName: `${section.key}-section`
    };

    // Use CardsList with appropriate type for all sections
    if (section.key === 'certifications') {
      return <CardsList {...sectionProps} type="certifications" />;
    }

    if (section.key === 'skills') {
      return <CardsList {...sectionProps} type="skills" />;
    }

    if (section.key === 'playlists') {
      return <CardsList {...sectionProps} type="playlists" />;
    }

    // For new content, use standard cards
    return <CardsList {...sectionProps} />;
  };

  const cardsView = isEmpty(cards?.list) ? (
    <div>
      <div className={style.noresults}>
        <div className={style.noresultstxt}>{noresultsfound}</div>
        <Button
          {...clearFilters}
          data-name="searchPageClear"
          className={style.clear}
          style={{background: defaultColor}}
          type="link"
        />
      </div>
      {recommendationsView}
    </div>
  ) : (
    <CardsGrid {...cards} />
  );

  // Convert sections object to array and sort by order
  const sortedSections = pipe(
    keys,
    map(key => ({key, ...sections[key]})),
    sortBy('order')
  )(sections);

  const hasSections = size(sortedSections) > 0;

  const contentGridSection = (
    <div className={style.contentSection}>
      <div className={style.sectionHeader}>
        <div className={style.sectionTitle}>
          <span>{title}</span>
          <Tag
            label={count || cards.list.length.toString()}
            type="default"
            size="S"
            customStyle={{backgroundColor: COLORS.cm_grey_100, color: COLORS.neutral_500}}
          />
        </div>
        <div className={style.contentGrid}> {cardsView}</div>
      </div>
    </div>
  );

  return (
    <div data-name="filters">
      {searchFilters ? (
        <Filters
          {...searchFilters}
          moreSortAriaLabel={moreSortAriaLabel}
          moreFilterAriaLabel={moreFilterAriaLabel}
          filterGroupAriaLabel={filterGroupAriaLabel}
          sortAriaLabel={sortAriaLabel}
        />
      ) : null}
      {quickFilters ? <QuickFilters {...quickFilters} /> : null}

      {hasSections ? (
        <div data-name="explorerSections" className={style.sectionsWrapper}>
          {sortedSections.map((section, index) => (
            <div data-name={`section-${section.key}`} key={`${section.key}-${index}`}>
              {renderSection(section)}
            </div>
          ))}
          {contentGridSection ? <div>{contentGridSection}</div> : null}
        </div>
      ) : (
        <div data-name="searchResult" className={style.cardsWrapper}>
          <div className={style.title} role="status">
            {title}
          </div>
          {cardsView}
        </div>
      )}

      {popinWithCards ? (
        <div className={style.popinWithCards} ref={nodeRef}>
          <CMPopin {...popinWithCards} />
        </div>
      ) : null}
    </div>
  );
};

SearchPage.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SearchPage.propTypes = {
  noresultsfound: PropTypes.string,
  title: PropTypes.string,
  searchFilters: PropTypes.shape(Filters.propTypes),
  quickFilters: PropTypes.shape(QuickFilters.propTypes),
  cards: PropTypes.shape(CardsGrid.propTypes),
  count: PropTypes.number,
  clearFilters: PropTypes.shape(Button.propTypes),
  recommendations: PropTypes.shape(CardsList.propTypes),
  moreSortAriaLabel: PropTypes.string,
  moreFilterAriaLabel: PropTypes.string,
  filterGroupAriaLabel: PropTypes.string,
  sortAriaLabel: PropTypes.string,
  popinWithCards: PropTypes.shape(CMPopin.propTypes),
  sections: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      cards: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape(cardPropTypes),
          PropTypes.shape(LearnerSkillCard.propTypes),
          PropTypes.shape(CertificationCard.propTypes),
          PropTypes.shape(PlaylistCard.propTypes),
          PropTypes.shape(LearningPriorityCard.propTypes)
        ])
      ),
      showMore: PropTypes.string,
      onShowMore: PropTypes.func,
      order: PropTypes.number,
      count: PropTypes.number,
      'arrows-aria-label': PropTypes.shape({
        showMoreOnLeftAriaLabel: PropTypes.string,
        showMoreOnRightAriaLabel: PropTypes.string
      })
    })
  )
};

export default SearchPage;
