import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import Button from '../../atom/button';
import style from './style.css';
import SetupCohortItemPopin from './setup-cohort-item-popin';

const InputSplitScreen = props => {
  const {providerCondition = {}, groupSelection = {}, cohortMessage} = props;
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
    <div className={cohortMessage ? style.splitMessage : style.splitDefault}>
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
  providerCondition: PropTypes.shape({}),
  groupSelection: PropTypes.shape({})
};

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
  ...Button.propTypes
};

const SetupCohortItem = props => {
  const {fields = [], cohortMessage} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'splitScreen':
        return <InputSplitScreen {...field} cohortMessage={cohortMessage} />;
      case 'buttonGroup':
        return <ButtonGroup {...field} />;
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
        type: PropTypes.oneOf(['splitScreen']),
        ...InputSplitScreen.propTypes
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['buttonGroup']),
        ...ButtonGroup.propTypes
      }),
      PropTypes.shape({
        ...InputText.propTypes
      })
    ])
  )
};
export default SetupCohortItem;
