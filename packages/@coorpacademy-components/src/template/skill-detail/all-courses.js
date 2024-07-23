import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import Provider from '../../atom/provider';
import Select, {SelectOptionPropTypes} from '../../atom/select';
import ButtonLink from '../../atom/button-link';
import SearchForm from '../../molecule/search-form';
import CardsGrid from '../../organism/cards-grid';
import searchValueIncluded from '../../util/search-value-included';
import InputSwitch from '../../atom/input-switch';
import style from './all-courses.css';

const FilterButton = (props, context) => {
  const {selected, filter, onClick} = props;
  const {skin} = context;
  const primarySkinColor = get('common.primary', skin);

  const buttonProps = {
    customStyle: {
      backgroundColor: selected ? primarySkinColor : '#E1E1E3',
      color: selected ? '#FFFFFF' : '#515161',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
      width: 'fit-content'
    },
    label: filter,
    onClick,
    'data-name': 'filter-type-course-button'
  };

  return <ButtonLink {...buttonProps} />;
};

FilterButton.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

FilterButton.propTypes = {
  selected: PropTypes.bool,
  filter: PropTypes.string,
  onClick: PropTypes.func
};

const AllCourses = (props, context) => {
  const {skillIncludedCourses, filters, sorting} = props;
  const {options, onChange} = filters;
  const {list} = skillIncludedCourses;
  const {translate} = context;
  const [showCompleted, setShowCompleted] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(
    list.sort((a, b) => {
      const progressA = a.progress ?? 0;
      const progressB = b.progress ?? 0;
      return progressB - progressA;
    })
  );

  const sortView =
    sorting !== undefined ? (
      <div data-name="choice">
        <Select {...sorting} aria-label="All courses sort" />
      </div>
    ) : null;

  const handleSearch = useCallback(
    value => {
      setSearchValue(value);
      setSearchResults(list.filter(skill => searchValueIncluded(skill.title, value)));
    },
    [list, setSearchValue, setSearchResults]
  );

  const handleSearchReset = useCallback(() => {
    setSearchValue('');
    setSearchResults(list);
  }, [list, setSearchValue, setSearchResults]);

  const handleShowCompletedToggle = useCallback(() => {
    const tempShowCompleted = !showCompleted;
    setShowCompleted(tempShowCompleted);
    if (tempShowCompleted) {
      setSearchResults(list);
      handleSearchReset();
    } else {
      setSearchResults(searchResults.filter(skill => skill.progress === 0));
    }
  }, [searchResults, showCompleted, setShowCompleted]);

  return (
    <>
      <div className={style.continueLearningWrapper}>
        <span className={style.continueLearningTitle}>{translate('all_courses')}</span>
        <span className={style.continueLearningNumber}>{skillIncludedCourses.list.length}</span>
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
          <div className={style.sortWrapper}>
            {translate('sort_by')}
            {sortView}
          </div>
        </div>
      </div>
      <div className={style.filterWrapper}>
        {options.length > 2 && searchResults.length > 0
          ? options.map((filter, index) => {
              const {name, value, selected} = filter;

              function handleChange() {
                onChange(value);
                handleSearchReset();
              }
              return (
                <div key={index} className={style.filterButtonWrapper}>
                  <FilterButton selected={selected} filter={name} onClick={handleChange} />
                  {value === 'ALL' ? <div className={style.divider} /> : null}
                </div>
              );
            })
          : null}
      </div>
      <div>
        {searchResults.length > 0 ? (
          <CardsGrid list={searchResults} justifyContent="left" />
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
  skillIncludedCourses: PropTypes.shape(CardsGrid.propTypes),
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape(SelectOptionPropTypes))
  }),
  sorting: PropTypes.shape(Select.propTypes)
};

export default AllCourses;
