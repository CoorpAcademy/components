import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import SetupSection from '../setup-section';
import Loader from '../../atom/loader';
import style from './style.css';

const preventDefault = e => e.preventDefault();

const Item = props => {
  const {id, onDrop} = props;

  const dragHandler = useCallback(
    e => {
      if (id) e.dataTransfer.setData('text', id);
    },
    [id]
  );
  const dropHandler = useCallback(
    e => {
      preventDefault(e);
      const data = e.dataTransfer.getData('text');
      if (onDrop && data) onDrop(data, id);
    },
    [id, onDrop]
  );

  return (
    <div
      className={style.section}
      onDragStart={dragHandler}
      onDragOver={preventDefault}
      onDrop={dropHandler}
      draggable
    >
      <SetupSection {...props} />
    </div>
  );
};
Item.propTypes = {
  ...SetupSection.propTypes,
  onDrop: PropTypes.func
};

const SetupSections = (props, context) => {
  const {sections, loading = false, onDrop} = props;

  let sectionsView = null;

  if (loading) {
    sectionsView = (
      <div className={style.loading}>
        <Loader />
      </div>
    );
  } else {
    sectionsView = sections.map((section, index) => {
      return (
        <Item
          {...section}
          key={section.id}
          onUp={index === 0 ? null : section.onUp}
          onDown={index === sections.length - 1 ? null : section.onDown}
          onDrop={onDrop}
        />
      );
    });
  }

  return <div>{sectionsView}</div>;
};

SetupSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(SetupSection.propTypes)),
  loading: PropTypes.bool,
  onDrop: PropTypes.func
};

export default SetupSections;
