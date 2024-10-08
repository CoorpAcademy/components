import React, {useEffect, useMemo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {assign, pick} from 'lodash/fp';
import {convert} from 'css-color-function';
import BaseModal from '../base-modal';
import ListItem from '../../organism/list-item';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import Provider from '../../atom/provider';
import {SelectOptionPropTypes} from '../../atom/select';
import SearchForm from '../search-form';
import searchValueIncluded from '../../util/search-value-included';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const FilterButton = props => {
  const {active, filter, itemTotal, onClick} = props;
  const primarySkinColor = COLORS.cm_primary_blue;

  const Content = useCallback(
    () => (
      <div>
        {filter}
        <span
          className={active ? style.skillFilterNumber : style.skillFilterNumberInActive}
          style={{
            backgroundColor: active ? convert(`color(${primarySkinColor} a(0.07))`) : '#EAEAEB',
            color: active ? primarySkinColor : '#515161'
          }}
        >
          {itemTotal}
        </span>
      </div>
    ),
    [filter, itemTotal, active, primarySkinColor]
  );

  const buttonProps = {
    customStyle: {
      backgroundColor: active ? convert(`color(${primarySkinColor} a(0.07))`) : 'transparent',
      color: active ? primarySkinColor : '#9999A8',
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
      width: 'fit-content'
    },
    onClick,
    content: <Content />,
    'data-name': 'change-skill-focus-button'
  };

  return <ButtonLink {...buttonProps} />;
};

FilterButton.propTypes = {
  active: PropTypes.bool,
  filter: PropTypes.string,
  itemTotal: PropTypes.number,
  onClick: PropTypes.func
};

const LearningPriorityModal = (props, context) => {
  const {priorities, preselected, isOpen, isLoading, filters, onCancel, onAdd, onClose} = props;
  const {translate} = context;

  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedPriorityType, setSelectedPriorityType] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('all');
  const [searchResults, setSearchResults] = useState(priorities);

  const handleCancel = useCallback(() => {
    setSelectedPriority('');
    setSelectedPriorityType('');
    onCancel();
  }, [setSelectedPriority, setSelectedPriorityType, onCancel]);

  const handleClose = useCallback(() => {
    setSelectedPriority('');
    setSelectedPriorityType('');
    onClose();
  }, [setSelectedPriority, setSelectedPriorityType, onClose]);

  const handleSearch = useCallback(
    value => {
      setSearchValue(value);
      setSearchResults(priorities.filter(priority => searchValueIncluded(priority.title, value)));
    },
    [priorities, setSearchValue, setSearchResults]
  );

  const handleSearchReset = useCallback(() => {
    setSearchValue('');
    setSearchResults(priorities);
  }, [priorities, setSearchValue, setSearchResults]);

  useEffect(() => {
    setSearchResults(priorities);
  }, [priorities]);

  const priorityList = useMemo(() => {
    return searchResults.map(priority => {
      const isPreSelectedPriority = preselected.some(selected => selected === priority.priorityRef);
      return assign(
        {
          selected: isPreSelectedPriority,
          disabled: isPreSelectedPriority
        },
        pick(['title', 'priorityRef', 'type', 'courses'], priority)
      );
    });
  }, [searchResults, preselected]);

  const footer = useMemo(() => {
    return {
      cancelButton: {
        onCancel: handleCancel,
        label: translate('cancel')
      },
      confirmButton: {
        onConfirm: () => {
          onAdd(selectedPriority, selectedPriorityType);
          setSelectedPriority('');
          setSelectedPriorityType('');
          onClose();
        },
        label: translate('add'),
        iconName: 'plus',
        disabled: isLoading || !selectedPriority,
        color: COLORS.cm_primary_blue
      }
    };
  }, [
    handleCancel,
    setSelectedPriority,
    setSelectedPriorityType,
    onAdd,
    onClose,
    translate,
    selectedPriority,
    selectedPriorityType,
    isLoading
  ]);

  if ((!isLoading && !priorities) || !isOpen) return null;

  return (
    <BaseModal
      title={translate('learning_priority_modal_title')}
      description={translate('learning_priority_modal_description')}
      isOpen={isOpen}
      onClose={handleClose}
      footer={footer}
    >
      <div className={style.LearningPriorityContainer}>
        {isLoading ? (
          <div className={style.loaderContainer}>
            <Loader className={style.loader} theme="coorpmanager" />
          </div>
        ) : (
          <>
            <div className={style.searchWrapper}>
              <SearchForm
                search={{
                  placeholder: translate('search_priority_place_holder'),
                  value: searchValue,
                  onChange: handleSearch
                }}
                onReset={handleSearchReset}
              />
            </div>
            <div className={style.filterWrapper}>
              {searchResults.length > 0
                ? filters.map((filter, index) => {
                    const {name, value, count} = filter;

                    function handleChange() {
                      setFilterValue(value);
                      handleSearchReset();
                    }

                    if (count === 0) return null;

                    return (
                      <div key={index} className={style.filterButtonWrapper}>
                        <FilterButton
                          active={filterValue === value}
                          filter={name}
                          onClick={handleChange}
                          itemTotal={count}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
            <div className={style.priorityListWrapper}>
              {priorityList.map(priority => {
                const {title, priorityRef, courses = null, type, selected, disabled} = priority;
                function handlePriorityClick() {
                  if (selectedPriority === priorityRef) {
                    setSelectedPriority('');
                    setSelectedPriorityType('');
                    return;
                  }
                  setSelectedPriority(priorityRef);
                  setSelectedPriorityType(type);
                }

                if ((filterValue !== 'all' && type !== filterValue) || !type || !title) return null;

                return (
                  <ListItem
                    {...(courses !== null ? {subtitle: `${courses} ${translate('courses')}`} : {})}
                    title={title}
                    selected={selected || selectedPriority === priorityRef}
                    selectedColor={COLORS.cm_primary_blue}
                    disabled={disabled}
                    onClick={handlePriorityClick}
                    tags={[{label: type, type: 'default'}]}
                    key={priorityRef}
                    backgroundColor="skin"
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </BaseModal>
  );
};

LearningPriorityModal.contextTypes = {
  translate: Provider.childContextTypes.translate
};

LearningPriorityModal.propTypes = {
  priorities: PropTypes.arrayOf(
    PropTypes.shape({
      priorityRef: PropTypes.string,
      title: PropTypes.string,
      courses: PropTypes.number,
      type: PropTypes.oneOf(['skill', 'playlist', 'certificate'])
    })
  ),
  preselected: PropTypes.arrayOf(PropTypes.string),
  isOpen: PropTypes.bool,
  isLoading: PropTypes.bool,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      ...SelectOptionPropTypes,
      count: PropTypes.number
    })
  ),
  onCancel: PropTypes.func,
  onAdd: PropTypes.func,
  onClose: PropTypes.func
};

export default LearningPriorityModal;
