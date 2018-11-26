import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import Button from '../../atom/button';
import style from './style.css';

const InputSplitScreen = props => {
  const {conditions = {}, groups = {}} = props;
  const dataCriteria = {
    groups: {
      fields: conditions.values
    }
  };
  const dataCollection = {
    groups: {
      fields: groups.values
    }
  };
  const criteriaList = map.convert({cap: false})(
    (criterion, key) => <SetupCohortItem key={key} {...criterion} />,
    dataCriteria
  );
  const collectionList = map.convert({cap: false})(
    (collection, key) => <SetupCohortItem key={key} {...collection} />,
    dataCollection
  );
  return (
    <div className={style.split}>
      <div className={style.splitLeft}>
        <div>
          <p className={style.title}>{conditions.title}</p>
          {criteriaList}
        </div>
      </div>
      <div className={style.splitRight}>
        <div>
          <p className={style.title}>{groups.title}</p>
          {collectionList}
        </div>
      </div>
    </div>
  );
};

const ButtonGroup = props => {
  const {buttonGroup} = props;
  const data = {
    groups: {
      fields: buttonGroup
    }
  };
  const buttons = map.convert({cap: false})(
    (buttonProps, key) => <SetupCohortItem key={key} {...buttonProps} />,
    data
  );
  return <div className={style.buttonGroup}>{buttons}</div>;
};

const SetupCohortItem = props => {
  const {fields = []} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'splitScreen':
        return <InputSplitScreen {...field} />;
      case 'button':
        return (
          <div className={style.button}>
            <Button {...field} />
          </div>
        );
      case 'buttonGroup':
        return <ButtonGroup {...field} />;
      default:
        return <InputText {...field} />;
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

  return <div className={style.wrapper}>{fieldsList}</div>;
};

SetupCohortItem.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string,
      values: PropTypes.array,
      value: PropTypes.string,
      checked: PropTypes.bool
    })
  )
};
export default SetupCohortItem;
