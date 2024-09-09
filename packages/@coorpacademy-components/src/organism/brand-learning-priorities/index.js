import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {convert} from 'css-color-function';
import {get} from 'lodash/fp';
import Provider from '../../atom/provider';
import Loader from '../../atom/loader';
import {SelectOptionPropTypes} from '../../atom/select';
import DraggableList from '../../molecule/draggable-list';
import ButtonLink from '../../atom/button-link';
import LearningPriorityModal from '../../molecule/learning-priority-modal';
import style from './style.css';

const BrandLearningPriorities = (props, context) => {
  const {content, priorities, filters, isLoading, onAdd} = props;
  const [openModal, setOpenModal] = useState(false);
  const {skin, translate} = context;
  const primarySkinColor = get('common.primary', skin);

  const selectedPriorities = useMemo(
    () => content.items.map(priority => priority.priorityRef),
    [content.items]
  );

  const Loading = useCallback(
    () => (
      <div className={style.loading}>
        <Loader />
      </div>
    ),
    []
  );

  const handleOpenModal = useCallback(() => setOpenModal(true), [setOpenModal]);
  const handleCloseModal = useCallback(() => setOpenModal(false), [setOpenModal]);
  return (
    <div className={style.container}>
      <LearningPriorityModal
        isLoading={isLoading}
        isOpen={openModal}
        onCancel={handleCloseModal}
        onClose={handleCloseModal}
        onAdd={onAdd}
        priorities={priorities}
        filters={filters}
        preselected={selectedPriorities}
      />
      <div className={style.LPtitle}>{translate('learning_priorities')}</div>
      <div className={style.LPdescription}>
        {translate('learning_priorities_brand_description')}
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={style.ctaWrapper}>
            <div className={style.priorityCount}>
              {`${content.items.length} ${translate('items')}`}
            </div>
            <ButtonLink
              customStyle={{
                backgroundColor: primarySkinColor,
                color: '#FFFFFF',
                transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out',
                width: 'fit-content'
              }}
              hoverBackgroundColor={convert(`color(${primarySkinColor} a(0.07))`)}
              hoverColor={primarySkinColor}
              onClick={handleOpenModal}
              label={translate('add_learning_priority')}
              data-name="add-learning-priority"
              icon={{
                position: 'left',
                faIcon: {
                  name: 'plus',
                  backgroundColor: primarySkinColor,
                  color: '#FFFFFF',
                  size: 16
                }
              }}
            />
          </div>
          <DraggableList {...content} />
        </>
      )}
    </div>
  );
};

BrandLearningPriorities.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

BrandLearningPriorities.propTypes = {
  content: PropTypes.shape(DraggableList.propTypes),
  priorities: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string,
      title: PropTypes.string,
      courses: PropTypes.number,
      type: PropTypes.string
    })
  ),
  filters: PropTypes.shape({
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        ...SelectOptionPropTypes,
        count: PropTypes.number
      })
    )
  }),
  isLoading: PropTypes.bool,
  onAdd: PropTypes.func
};

export default BrandLearningPriorities;
