import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const LearningPrioritySetupItem = (props, context) => {
  const {priorityRef, id, title, courses = null, type, 'aria-label': ariaLabel, onRemove} = props;

  const {translate} = context;

  const handleRemovePriority = useCallback(
    () => onRemove(priorityRef, type),
    [priorityRef, type, onRemove]
  );

  const handleTypeTranslate = itemType => {
    switch (itemType) {
      case 'skill':
        return translate('skill');
      case 'playlist':
        return translate('playlist');
      case 'certificate':
        return translate('certificate');
    }
  };

  return (
    <div
      className={style.container}
      aria-label={ariaLabel}
      data-name={`learning-priority-setup-item-${id}`}
    >
      <div className={style.containerInfos}>
        <div className={style.titleWrapper}>
          <div className={style.title}>{title}</div>
          <div>
            <Tag label={handleTypeTranslate(type)} size={'S'} />
          </div>
        </div>
        {courses !== null ? (
          <span className={style.courses}>{`${courses} ${translate('courses')}`}</span>
        ) : null}
      </div>
      <ButtonLink
        type="primary"
        customStyle={{
          width: 'fit-content',
          backgroundColor: 'transparent'
        }}
        hoverBackgroundColor="#EAEAEB"
        icon={{
          position: 'left',
          faIcon: {
            name: 'trash',
            color: '#515161',
            size: 16
          }
        }}
        onClick={handleRemovePriority}
      />
    </div>
  );
};

LearningPrioritySetupItem.contextTypes = {
  translate: Provider.childContextTypes.translate
};

LearningPrioritySetupItem.propTypes = {
  'aria-label': PropTypes.string,
  id: PropTypes.string,
  priorityRef: PropTypes.string,
  title: PropTypes.string,
  courses: PropTypes.number,
  type: PropTypes.oneOf(['skill', 'playlist', 'certificate']),
  onRemove: PropTypes.func
};

export default LearningPrioritySetupItem;
