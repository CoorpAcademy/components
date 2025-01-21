import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {get, filter, map, size, isNil} from 'lodash/fp';
import Provider from '../../atom/provider';
import Select, {SelectOptionPropTypes} from '../../atom/select';
import ButtonLink from '../../atom/button-link';
import SearchForm from '../../molecule/search-form';
import CardsGrid from '../../organism/cards-grid';
import searchValueIncluded from '../../util/search-value-included';
import InputSwitch from '../../atom/input-switch';
import Banner from '../../molecule/banner';
import style from './all-courses.css';

const uncappedMap = map.convert({cap: false});

const FilterButton = (props, context) => {
  const {dataName, ariaLabel, selected, label, onClick} = props;
  const {skin} = context;
  const primarySkinColor = get('common.primary', skin);

  const buttonProps = {
    customStyle: {
      backgroundColor: selected ? primarySkinColor : '#E1E1E3',
      color: selected ? '#FFFFFF' : '#515161',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
      width: 'fit-content'
    },
    label,
    onClick,
    'data-name': dataName,
    'aria-label': ariaLabel
  };

  return <ButtonLink {...buttonProps} />;
};

FilterButton.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

FilterButton.propTypes = {
  dataName: PropTypes.string,
  ariaLabel: PropTypes.string,
  selected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func
};

const AllCourses = (props, context) => {
  const {content, filters, sorting, totalContents, bannerMicrolearningRuleAction} = props;
  const {options, onChange} = filters;
  const {list, loading} = content;
  const {translate} = context;
  const [showCompleted, setShowCompleted] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const sortView =
    sorting !== undefined ? (
      <div data-name="choice">
        <Select {...sorting} aria-label="All courses sort" />
      </div>
    ) : null;

  const filteredContent = useMemo(() => {
    return showCompleted ? list : filter(course => course.progress < 1, list);
  }, [list, showCompleted]);

  const contentResult = useMemo(() => {
    return filter(skill => searchValueIncluded(skill.title, searchValue), filteredContent);
  }, [filteredContent, searchValue]);

  const handleSearch = useCallback(
    value => {
      setSearchValue(value);
    },
    [setSearchValue]
  );

  const handleSearchReset = useCallback(() => {
    setSearchValue('');
  }, [setSearchValue]);

  const handleShowCompletedToggle = useCallback(() => {
    setShowCompleted(prevShowCompleted => !prevShowCompleted);
  }, []);

  return (
    <>
      <div className={style.continueLearningWrapper}>
        <span className={style.continueLearningTitle}>{translate('all_content')}</span>
        <span className={style.continueLearningNumber}>
          {isNil(totalContents) ? size(contentResult) : totalContents}
        </span>
      </div>
      <div className={style.searchAndSortSection}>
        <div className={style.searchWrapper}>
          <SearchForm
            search={{
              placeholder: translate('search_place_holder'),
              value: searchValue,
              onChange: handleSearch
            }}
            onReset={handleSearchReset}
            dataTestId="all-courses-search-input"
          />
        </div>
        <div className={style.sortSection}>
          <InputSwitch
            id={'show-completed-courses-switch'}
            type="switch"
            name={translate('show_completed')}
            title={translate('show_completed')}
            aria-label={'Show completed courses aria label'}
            value={showCompleted}
            onChange={handleShowCompletedToggle}
          />
          {sortView ? (
            <div className={style.sortWrapper}>
              {translate('sort_by')}
              {sortView}
            </div>
          ) : null}
        </div>
      </div>
      <div className={style.bannerWrapper}>
        {bannerMicrolearningRuleAction ? (
          <Banner
            type="info"
            message={translate('banner_microlearning_rule.message')}
            cta={[
              {
                type: 'switch',
                label: translate('banner_microlearning_rule.label'),
                action: e => bannerMicrolearningRuleAction(e)
              }
            ]}
          />
        ) : null}
      </div>
      <div className={style.filterWrapper}>
        {size(options) > 2
          ? uncappedMap((filterProps, index) => {
              const {name, value, selected} = filterProps;

              function handleFilterChange() {
                onChange(value);
              }

              return (
                <div key={index} className={style.filterButtonWrapper}>
                  <FilterButton
                    dataName={`filter-button-${value}`}
                    ariaLabel={`Filter by ${name}`}
                    selected={selected}
                    label={name}
                    onClick={handleFilterChange}
                  />
                  {value === 'ALL' ? <div className={style.divider} /> : null}
                </div>
              );
            }, options)
          : null}
      </div>
      <div>
        {size(contentResult) ? (
          <CardsGrid
            list={contentResult}
            loading={loading}
            customStyle={{justifyContent: 'left'}}
          />
        ) : (
          <div className={style.emptySearchResultContainer}>
            <div className={style.emptySearchResultTitle}>
              {translate('empty_search_result_title', {searchValue})}
            </div>
            <div className={style.emptySearchResultDescription}>
              {translate('empty_search_result_description')}
            </div>
            <div className={style.emptySearchResultClearSearch} onClick={handleSearchReset}>
              {translate('empty_search_result_clear_search')}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

AllCourses.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

AllCourses.propTypes = {
  content: PropTypes.shape(CardsGrid.propTypes),
  totalContents: PropTypes.number,
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  sorting: PropTypes.shape(Select.propTypes),
  bannerMicrolearningRuleAction: PropTypes.func
};

export default AllCourses;
