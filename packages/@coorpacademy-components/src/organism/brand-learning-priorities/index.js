import React, {useState, useCallback, useMemo, useEffect} from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Loader from '../../atom/loader';
import {SelectOptionPropTypes} from '../../atom/select';
import DraggableList from '../../molecule/draggable-list';
import ButtonLink from '../../atom/button-link';
import LearningPriorityModal from '../../molecule/learning-priority-modal';
import style from './style.css';

const BrandLearningPriorities = (props, context) => {
  const {content, priorities, filters, isLoading, onAdd} = props;
  const {items, onDrop, itemType} = content;
  const [itemList, setItemList] = useState([...items]);
  const [openModal, setOpenModal] = useState(false);
  const {translate} = context;

  const selectedPriorities = useMemo(() => items.map(priority => priority.priorityRef), [items]);

  const handleDropItem = useCallback(
    (dragRef, dropRef) => {
      const dragIndex = itemList.findIndex(item => item.priorityRef === dragRef);
      const dropIndex = itemList.findIndex(item => item.priorityRef === dropRef);

      if (dragIndex === dropIndex) return;

      const newItems = [...itemList];
      const [dragItem] = newItems.splice(dragIndex, 1);
      newItems.splice(dropIndex, 0, dragItem);

      setItemList(newItems);
      onDrop(
        newItems.map(item => {
          return {type: item.type, ref: item.priorityRef};
        })
      );
    },
    [itemList, setItemList, onDrop]
  );

  const Loading = useCallback(
    () => (
      <div className={style.loaderContainer}>
        <Loader className={style.loader} theme="coorpmanager" />
      </div>
    ),
    []
  );

  useEffect(() => {
    setItemList(items);
  }, [items]);

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
            <div className={style.priorityCount} data-name="learning-priority-count">
              {`${items.length} ${translate('items')}`}
            </div>
            <ButtonLink
              type="primary"
              customStyle={{
                width: 'fit-content'
              }}
              onClick={handleOpenModal}
              label={translate('add_learning_priority')}
              data-name="add-learning-priority"
              icon={{
                position: 'left',
                faIcon: {
                  name: 'plus',
                  color: '#FFFFFF',
                  size: 16
                }
              }}
            />
          </div>
          <DraggableList itemType={itemType} items={itemList} onDrop={handleDropItem} />
        </>
      )}
    </div>
  );
};

BrandLearningPriorities.contextTypes = {
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
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      ...SelectOptionPropTypes,
      count: PropTypes.number
    })
  ),
  isLoading: PropTypes.bool,
  onAdd: PropTypes.func
};

export default BrandLearningPriorities;
