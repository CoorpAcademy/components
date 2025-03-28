import React from 'react';
import BrandFormGroup from '../../molecule/brand-form-group';
import ListItems from '../list-items';
import Title from '../../atom/title';
import TitleAndInput from '../title-and-input';
import propTypes, {SkillEditionProps} from './types';
import style from './style.css';

const SkillEdition = (props: SkillEditionProps) => {
  const {skillInformations, translations, content} = props;
  const {iconEditor, form} = skillInformations;

  return (
    <div className={style.container}>
      <div className={style.skillInformationsContainer}>
        <BrandFormGroup {...form} />
        <div className={style.iconEditor}>
          <TitleAndInput {...iconEditor} />
        </div>
      </div>
      <ListItems {...translations} />
      <div className={style.contentContainer}>
        <Title {...content.title} />
        <ListItems {...content.listContent} />
      </div>
    </div>
  );
};

SkillEdition.propTypes = propTypes;

export default SkillEdition;
