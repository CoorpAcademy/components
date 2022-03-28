import React from 'react';
import PropTypes from 'prop-types';
import InputTextWithTitle from '../../atom/input-text-with-title';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import Title from '../../atom/title';
import DragAndDropWrapper from '../drag-and-drop-wrapper';
import style from './style.css';

const CHILD = {
  'input-text': InputTextWithTitle,
  'drag-and-drop-wrapper': DragAndDropWrapper
};
const TitleAndCheckBoxWrapper = props => {
  const {checkboxWithTitle, child, sectionTitle} = props;

  const Child = CHILD[child.childType];
  return (
    <div>
      {checkboxWithTitle ? <CheckboxWithTitle {...checkboxWithTitle} /> : null}
      {sectionTitle ? (
        <div className={style.sectionTitle}>
          <Title {...sectionTitle} type={'form-group'} />
        </div>
      ) : null}
      <div className={style.child}>
        <Child {...child} />
      </div>
    </div>
  );
};

TitleAndCheckBoxWrapper.propTypes = {
  checkboxWithTitle: CheckboxWithTitle.propTypes,
  sectionTitle: Title.propTypes,
  child: PropTypes.oneOfType([
    PropTypes.shape({
      ...InputTextWithTitle.propTypes,
      childType: PropTypes.oneOf(['input-text'])
    }),
    PropTypes.shape({
      ...DragAndDropWrapper.propTypes,
      childType: PropTypes.oneOf(['drag-and-drop'])
    })
  ])
};
export default TitleAndCheckBoxWrapper;
