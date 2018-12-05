import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import Button from '../../atom/button';
import style from './style.css';
import SetupCohortItemPopin from './setup-cohort-item-popin';

const InputSplitScreen = props => {
  const {leftSection, rightSection, cohortMessage, buttons} = props;
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
      <div className={cohortMessage ? style.splitMessage : style.splitDefault}>
        <div className={style.splitLeft}>
          <p className={style.title}>{leftSection.title}</p>
          {criteriaList}
        </div>
        <div className={style.splitRight}>
          <p className={style.title}>{rightSection.title}</p>
          {collectionList}
        </div>
      </div>
      <div className={style.buttonGroup}>{buttonList}</div>
    </div>
  );
};

InputSplitScreen.propTypes = {
  leftSection: PropTypes.shape({}),
  rightSection: PropTypes.shape({})
};

const SetupCohortItem = props => {
  const {fields, cohortMessage} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'splitForm':
        return <InputSplitScreen {...field} cohortMessage={cohortMessage} />;
      default:
        return <InputText {...field} disabled={!!cohortMessage} />;
    }
  };

  const buildField = (field, index) => {
    const input = buildInput(field);
    return (
      <div className={style.field} key={index}>
        {input}
      </div>
    );
  };

  const fieldsList = map.convert({cap: false})(buildField, fields);

  return (
    <div className={style.wrapper}>
      {fieldsList}
      {cohortMessage ? (
        <div className={style.wrapmessage}>
          <SetupCohortItemPopin header={cohortMessage.title} content={cohortMessage.subtitle} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

SetupCohortItem.defaultProps = {
  fields: []
};

SetupCohortItem.propTypes = {
  cohortMessage: PropTypes.shape({
    ...SetupCohortItemPopin.PropTypes
  }),
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['checkbox']),
        ...InputCheckbox.PropTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['splitForm']),
        ...InputSplitScreen.propTypes
      }),
      PropTypes.shape({
        ...InputText.propTypes
      })
    ])
  )
};
export default SetupCohortItem;
