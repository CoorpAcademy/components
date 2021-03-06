import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import InputCheckbox from '../../atom/input-checkbox';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import style from './style.css';

const InputSplitScreen = (props, context) => {
  const {translate} = context;
  const {leftSection, rightSection, buttons} = props;
  const criteriaList = map.convert({cap: false})((criterion, key) => {
    return (
      <div className={style.field} key={key}>
        <InputCheckbox {...criterion} />
      </div>
    );
  }, leftSection.values);
  const collectionList = map.convert({cap: false})((collection, key) => {
    return (
      <div className={style.field} key={key}>
        <InputCheckbox {...collection} />
      </div>
    );
  }, rightSection.values);
  const buttonList = map.convert({cap: false})((button, key) => {
    return (
      <div className={style.button} key={key}>
        <Button {...button} />
      </div>
    );
  }, buttons);
  return (
    <div>
      <div className={style.splitDefault}>
        <div className={style.splitLeft}>
          <p className={style.title}>{`${leftSection.title}${leftSection.required ? '*' : ''}`}</p>
          {criteriaList}
        </div>
        <div className={style.splitRight}>
          <p className={style.title}>
            {`${rightSection.title}${rightSection.required ? '*' : ''}`}
          </p>
          {collectionList}
        </div>
      </div>
      <div className={style.rowBottom}>
        <div className={style.buttonGroup}>{buttonList}</div>
        <p className={style.mandatoryFields}>{translate('mandatory_fields')}</p>
      </div>
    </div>
  );
};

const sectionPropTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      ...InputCheckbox.propTypes
    })
  ).isRequired,
  required: PropTypes.bool
};

InputSplitScreen.propTypes = {
  leftSection: PropTypes.shape({
    ...sectionPropTypes
  }),
  rightSection: PropTypes.shape({
    ...sectionPropTypes
  })
};

InputSplitScreen.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const SetupCohortItem = props => {
  const {field} = props;

  return (
    <div className={style.wrapper}>
      <InputSplitScreen {...field} />
    </div>
  );
};

SetupCohortItem.defaultProps = {
  field: {}
};

SetupCohortItem.propTypes = {
  field: PropTypes.shape({
    ...InputSplitScreen.propTypes
  })
};
export default SetupCohortItem;
