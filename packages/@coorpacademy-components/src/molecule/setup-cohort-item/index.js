import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Select from '../../atom/select';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import InputSwitch from '../../atom/input-switch';
import ImageUpload from '../../atom/image-upload';
import Button from '../../atom/button';
import style from './style.css';

const InputSplitSreen = props => {
  const {conditions = [], groups = []} = props;
  const dataCriterias = {
    fields: {
      fields: conditions
    }
  };
  const dataContent = {
    fields: {
      fields: groups
    }
  };
  const criteriasList = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    dataCriterias
  );
  const contentList = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    dataContent
  );
  return (
    <div className={style.split}>
      <div className={style.splitLeft}>
        <div>
          <p>Criterias</p>
          {criteriasList}
        </div>
      </div>
      <div className={style.splitLeft}>
        <div>
          <p>Content</p>
          {contentList}
        </div>
      </div>
    </div>
  );
};

const ButtonGroup = props => {
  const {buttonGroup} = props;
  const data = {
    fields: {
      fields: buttonGroup
    }
  };
  const buttons = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    data
  );
  return <div className={style.buttonGroup}>{buttons}</div>;
};

const SetupSlide = props => {
  const {fields = []} = props;
  const buildInput = field => {
    const {type} = field;
    switch (type) {
      case 'switch':
        return <InputSwitch {...field} />;
      case 'select':
        return <Select {...field} />;
      case 'checkbox':
        return <InputCheckbox {...field} />;
      case 'image':
        return <ImageUpload {...field} />;
      case 'splitSreen':
        return <InputSplitSreen {...field} />;
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

SetupSlide.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired
    })
  )
};
export default SetupSlide;
