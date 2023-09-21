import React from 'react';
import PropTypes from 'prop-types';
import {isUndefined} from 'lodash/fp';
import ImageUpload from '../../atom/image-upload';
import InputTextWithTitle from '../../atom/input-text-with-title';
import SelectMultiple from '../select-multiple';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import Title from '../../atom/title';
import DragAndDropWrapper from '../drag-and-drop-wrapper';
import style from './style.css';

const CHILD = {
  'input-text': InputTextWithTitle,
  'drag-and-drop-wrapper': DragAndDropWrapper,
  'image-upload': ImageUpload,
  'select-multiple': SelectMultiple
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
      <div
        className={
          checkboxWithTitle || (sectionTitle && isUndefined(sectionTitle.removeMargin))
            ? style.child
            : null
        }
      >
        <Child {...child} />
      </div>
    </div>
  );
};

TitleAndCheckBoxWrapper.propTypes = {
  checkboxWithTitle: PropTypes.shape(CheckboxWithTitle.propTypes),
  sectionTitle: PropTypes.shape({...Title.propTypes, removeMargin: PropTypes.bool}),
  child: PropTypes.oneOfType([
    PropTypes.shape({
      ...InputTextWithTitle.propTypes,
      childType: PropTypes.oneOf(['input-text'])
    }),
    PropTypes.shape({
      ...DragAndDropWrapper.propTypes,
      childType: PropTypes.oneOf(['drag-and-drop-wrapper'])
    }),
    PropTypes.shape({
      ...ImageUpload.propTypes,
      childType: PropTypes.oneOf(['image-upload'])
    }),
    PropTypes.shape({
      ...SelectMultiple.propTypes,
      childType: PropTypes.oneOf(['select-multiple'])
    })
  ])
};
export default TitleAndCheckBoxWrapper;
