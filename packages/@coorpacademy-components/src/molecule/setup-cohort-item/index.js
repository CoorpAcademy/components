import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import Button from '../../atom/button';
import style from './style.css';

const InputSplitScreen = props => {
  const {providerCondition = {}, groupSelection = {}} = props;
  const dataCriteria = {
    groups: {
      fields: providerCondition.values
    }
  };
  const dataCollection = {
    groups: {
      fields: groupSelection.values
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
          <p className={style.title}>{providerCondition.title}</p>
          {criteriaList}
        </div>
      </div>
      <div className={style.splitRight}>
        <div>
          <p className={style.title}>{groupSelection.title}</p>
          {collectionList}
        </div>
      </div>
    </div>
  );
};

InputSplitScreen.propTypes = {
  providerCondition: PropTypes.object,
  groupSelection: PropTypes.object
}

const ButtonGroup = props => {
  const {buttonGroup} = props;
  return (
    <div className={style.buttonGroup}>
      {map.convert({cap: false})(
        (button, key) => (
          <div key={key} className={style.button}>
            <Button {...button} />
          </div>
        ),
        buttonGroup
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttonGroup: PropTypes.array
}

const SetupCohortItem = props => {
  const {fields = []} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'checkbox':
        return <InputCheckbox {...field} cohortCheckbox />;
      case 'splitScreen':
        return <InputSplitScreen {...field} />;
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
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['checkbox']),
        ...InputCheckbox.PropTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['splitScreen']),
        ...InputSplitScreen.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['buttonGroup']),
        ...ButtonGroup.propTypes
      })
    ])
  )
};
export default SetupCohortItem;
