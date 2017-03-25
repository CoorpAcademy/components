import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import SetupSection from '../setup-section';
import style from './style.css';

const SetupSections = (props, context) => {
  const { translate } = context;

  const {
    sections
  } = props;

  const sectionsView = sections.map((section, index) => {
    return (
      <div key={index}
        className={style.section}
      >
        <SetupSection {...section} />
      </div>
    );
  });

  return (
    <div className={style.wrapper}>
      {sectionsView}
    </div>
  );
};

SetupSections.contextTypes = {
  translate: React.PropTypes.func
};

SetupSections.propTypes = {
  sections: React.PropTypes.array
};
export default SetupSections;
