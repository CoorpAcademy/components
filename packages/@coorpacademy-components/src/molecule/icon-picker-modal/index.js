import React, {useMemo, useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {entries, map, pipe, get, values, slice, size, uniq} from 'lodash/fp';
import BaseModal from '../base-modal';
import SelectIcon from '../../atom/select-icon';
import Provider from '../../atom/provider';
import SearchForm from '../search-form';
import style from './style.css';
import useIconSearch from './use-icon-search';

const ICONS_PER_LOAD = 48;

const IconPickerModal = (props, context) => {
  const {isOpen, onClose, onClick} = props;
  const {translate} = context;

  const [displayedIcons, setDisplayedIcons] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allIcons = useMemo(() => pipe(values, map(get('iconName')), uniq)(fas), []);
  const {searchValue, searchResults, handleSearch, handleReset} = useIconSearch(allIcons);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const loadMoreIcons = useCallback(() => {
    const nextIndex = currentIndex + ICONS_PER_LOAD;
    const newIcons = slice(currentIndex, nextIndex, searchResults);
    setDisplayedIcons(prevIcons => [...prevIcons, ...newIcons]);
    setCurrentIndex(nextIndex);
  }, [currentIndex, searchResults]);

  useEffect(() => {
    setDisplayedIcons(() => slice(0, ICONS_PER_LOAD, searchResults));
    setCurrentIndex(ICONS_PER_LOAD);
  }, [searchResults]);

  const handleScroll = useCallback(
    event => {
      const {scrollTop, clientHeight, scrollHeight} = event.currentTarget;
      if (scrollHeight - scrollTop <= clientHeight + 1) {
        loadMoreIcons();
      }
    },
    [loadMoreIcons]
  );

  const icons = useMemo(
    () =>
      pipe(
        entries,
        map(([index, iconName]) => {
          function handleIconClick() {
            return onClick(iconName);
          }

          return (
            <SelectIcon
              key={`icon-${iconName}`}
              size="responsive"
              data-name={`icon-${iconName}`}
              aria-label={iconName}
              faIcon={iconName}
              onClick={handleIconClick}
              options={{}}
            />
          );
        })
      )(displayedIcons),
    [displayedIcons, onClick]
  );

  if (!isOpen) return null;

  return (
    <BaseModal
      title={translate('icon_picker_title')}
      description={translate('icon_picker_description')}
      isOpen={isOpen}
      onClose={handleClose}
      onScroll={handleScroll}
      headerIcon={{
        name: 'arrows-rotate',
        backgroundColor: '#D6E6FF'
      }}
    >
      <div className={style.iconPicker}>
        {
          <>
            <div className={style.searchWrapper}>
              <SearchForm
                search={{
                  placeholder: translate('search_place_holder'),
                  value: searchValue,
                  onChange: handleSearch
                }}
                onReset={handleReset}
                dataTestId="search-input"
              />
            </div>
            {searchValue && size(searchResults) === 0 ? (
              <div className={style.emptySearchResultContainer}>
                <div className={style.emptySearchResultTitle}>
                  {translate('empty_search_result_title', {searchValue})}
                </div>
                <div className={style.emptySearchResultDescription}>
                  {translate('empty_search_result_description')}
                </div>
                <div className={style.emptySearchResultClearSearch} onClick={handleReset}>
                  {translate('empty_search_result_clear_search')}
                </div>
              </div>
            ) : (
              <div className={style.iconsListWrapper}>{icons}</div>
            )}
          </>
        }
      </div>
    </BaseModal>
  );
};

IconPickerModal.contextTypes = {
  translate: Provider.childContextTypes.translate
};

IconPickerModal.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func
};

export default IconPickerModal;
