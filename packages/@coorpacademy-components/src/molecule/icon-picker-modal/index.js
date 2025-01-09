import React, {useMemo, useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {entries, map, pipe, get, values, slice, size} from 'lodash/fp';
import BaseModal from '../base-modal';
import SelectIcon from '../../atom/select-icon';
import Provider from '../../atom/provider';
import SearchForm from '../search-form';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import useIconSearch from './use-icon-search';

const ICONS_PER_LOAD = 48;

const IconPickerModal = (props, context) => {
  const {isOpen, onCancel, onConfirm, onClose} = props;
  const {translate} = context;

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [displayedIcons, setDisplayedIcons] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allIcons = useMemo(() => pipe(values, map(get('iconName')))(fas), []);
  const {searchValue, searchResults, handleSearch, handleReset} = useIconSearch(allIcons);

  const handleCancel = useCallback(() => {
    onCancel();
  }, [onCancel]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleIconClick = useCallback(
    iconName => () => {
      setSelectedIcon(prevSelectedIcon => (prevSelectedIcon === iconName ? null : iconName));
    },
    []
  );

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
        map(([index, iconName]) => (
          <SelectIcon
            key={`icon-${index}`}
            size="responsive"
            data-name={`icon-${index}`}
            aria-label={`aria icon ${index}`}
            faIcon={iconName}
            onClick={handleIconClick(iconName)}
            options={{isSelected: selectedIcon === iconName}}
          />
        ))
      )(displayedIcons),
    [displayedIcons, selectedIcon, handleIconClick]
  );

  const footer = useMemo(() => {
    return {
      cancelButton: {
        onCancel: handleCancel,
        label: translate('cancel')
      },
      confirmButton: {
        onConfirm: () => {
          onConfirm(selectedIcon);
          setSelectedIcon(null);
          onClose();
        },
        label: translate('confirm'),
        iconName: 'plus',
        disabled: selectedIcon === null,
        color: COLORS.cm_primary_blue
      }
    };
  }, [handleCancel, onConfirm, onClose, translate, selectedIcon]);

  if (!isOpen) return null;

  return (
    <BaseModal
      title={translate('icon_picker_title')}
      description={translate('icon_picker_description')}
      isOpen={isOpen}
      onClose={handleClose}
      onScroll={handleScroll}
      footer={footer}
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
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

export default IconPickerModal;
