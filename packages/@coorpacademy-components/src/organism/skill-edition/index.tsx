import React from 'react';
import BrandFormGroup from '../../molecule/brand-form-group';
import IconEditor from '../icon-editor';
import ListItems from '../list-items';
import Title from '../../atom/title';
import propTypes, {SkillEditionProps} from './types';
import style from './style.css';

const SkillEdition = (props: SkillEditionProps) => {
  const {skillInformations, translations, content} = props;

  return (
    <div className={style.container}>
      <div className={style.skillInformationsContainer}>
        <BrandFormGroup {...skillInformations.form} />
        <div className={style.iconEditor}>
          <Title {...skillInformations.iconEditor.title} />
          <IconEditor {...skillInformations.iconEditor.editor} />
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
