import React from 'react';
import BrandFormGroup from '../../molecule/brand-form-group';
import IconEditor from '../icon-editor';
import ListItems from '../list-items';
import propTypes, {SkillEditionProps} from './types';
import style from './style.css';

const SkillEdition = (props: SkillEditionProps) => {
  const {skillInformations, translations} = props;

  return (
    <div className={style.container}>
      <div className={style.skillInformationsContainer}>
        <BrandFormGroup {...skillInformations.form} />
        <div className={style.iconEditor}>
          <IconEditor {...skillInformations.iconEditor} />
        </div>
      </div>
      <ListItems {...translations} />
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
