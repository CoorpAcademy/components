import React, {useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import {getOr, isEmpty, keys, map, pipe, sortBy} from 'lodash/fp';
import {convert} from 'css-color-function';
import classNames from 'classnames';
import Provider from '../../../atom/provider';
import Button from '../../../atom/button';
import ButtonLink from '../../../atom/button-link';
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
import BaseModal from '../../../molecule/base-modal';
import MultiFilterPanel from '../../../molecule/multi-filter-panel';
import Tabs from '../../../molecule/tabs';
import style from './style.css';

const SearchPage = (props, context) => {
  const {
    title,
    searchFilters,
    quickFilters,
    cards,
    count,
    noresultsfound,
    noresultsfoundDescription,
    clearFilters,
    recommendations,
    moreSortAriaLabel,
    moreFilterAriaLabel,
    filterGroupAriaLabel,
    sortAriaLabel,
    popinWithCards,
    sections = {},
    filtersModal,
    searchMessage,
    newVersion = false,
    tabs
  } = props;
  const {skin} = context;
  const defaultColor = getOr(COLORS.cm_primary_blue, 'common.primary', skin);
  const nodeRef = useRef(null);
  const recommendationsView = isEmpty(recommendations) ? null : (
    <CardsList {...recommendations} customStyle={{padding: '0'}} />
  );

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

  const tabsView = tabs ? <Tabs {...tabs} /> : null;

  const cardsView = isEmpty(cards?.list) ? (
    <div>
      <div className={style.noresults}>
        <div className={style.noresultsTitle}>{noresultsfound}</div>
        <div className={style.noresultsDescription}>{noresultsfoundDescription}</div>
        <ButtonLink
          {...clearFilters}
          data-name="searchPageClear"
          className={classNames(style.clear, style.center)}
          hoverBackgroundColor={convert(`hsl(from ${defaultColor} h s calc(l*(1 - 0.08)))`)}
          customStyle={{
            backgroundColor: defaultColor,
            color: 'white'
          }}
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

  const titleView = (
    <div className={style.sectionTitle}>
      <span>{title}</span>
      <Tag
        label={count || cards.list.length.toString()}
        type="default"
        size="S"
        customStyle={{backgroundColor: COLORS.cm_grey_100, color: COLORS.neutral_500}}
      />
    </div>
  );
  const contentGridSection = (
    <div className={style.contentSection}>
      <div className={style.sectionHeader}>
        {tabsView ? tabsView : titleView}
        <div className={style.contentGrid}> {cardsView}</div>
      </div>
    </div>
  );
  const handleclearFiltersOnClick = useCallback(() => clearFilters.onClick(), [clearFilters]);
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
      {searchMessage ? (
        <div className={style.searchMessageWrapper}>
          <span
            className={style.searchMessage}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: searchMessage}}
          />
          <Button
            submitValue={clearFilters.label}
            onClick={handleclearFiltersOnClick}
            data-name="searchMeassageClear"
            className={style.clear}
            style={{
              background: 'transparent',
              color: defaultColor,
              padding: '0 5px',
              fontSize: '14px'
            }}
            type="link"
          />
        </div>
      ) : null}
      {newVersion ? (
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

      {filtersModal ? (
        <BaseModal
          {...filtersModal}
          headerIcon={{
            name: filtersModal.headerIcon.name,
            backgroundColor: convert(`color(${defaultColor} lightness(92%))`),
            color: defaultColor
          }}
          footer={{
            cancelButton: filtersModal.footer.cancelButton,
            confirmButton: {
              ...filtersModal.footer.confirmButton,
              color: defaultColor
            }
          }}
        >
          {filtersModal.filterPanelProps ? (
            <MultiFilterPanel {...filtersModal.filterPanelProps} />
          ) : null}
        </BaseModal>
      ) : null}
    </div>
  );
};

SearchPage.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SearchPage.propTypes = {
  newVersion: PropTypes.bool,
  searchMessage: PropTypes.string,
  noresultsfound: PropTypes.string,
  noresultsfoundDescription: PropTypes.string,
  title: PropTypes.string,
  searchFilters: PropTypes.shape(Filters.propTypes),
  quickFilters: PropTypes.shape(QuickFilters.propTypes),
  cards: PropTypes.shape(CardsGrid.propTypes),
  count: PropTypes.number,
  clearFilters: PropTypes.shape(ButtonLink.propTypes),
  recommendations: PropTypes.shape(CardsList.propTypes),
  moreSortAriaLabel: PropTypes.string,
  moreFilterAriaLabel: PropTypes.string,
  filterGroupAriaLabel: PropTypes.string,
  sortAriaLabel: PropTypes.string,
  popinWithCards: PropTypes.shape(CMPopin.propTypes),
  filtersModal: PropTypes.shape(BaseModal.propTypes),
  tabs: PropTypes.shape(Tabs.propTypes),
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
      tabs: PropTypes.shape(Tabs.propTypes),
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
