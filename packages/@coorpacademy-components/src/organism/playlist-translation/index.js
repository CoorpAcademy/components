import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NovaSolidRemoveAddAddCircle1 as AddIcon, NovaLineContentEditionBin as Trash } from '@coorpacademy/nova-icons';
import VerticalLanguageMenu from '../../molecule/vertical-tabs';
import InputText from '../../atom/input-text';
import TextArea from '../../atom/input-textarea';
import Cta from '../../atom/button';
import style from './style.css';

function PlayListTranslation(props) {
  const {languageTabs, inputText, textArea, cta, languagesListTitleAria} = props;

  return (
    <div className={style.container}>
      <VerticalLanguageMenu
        className={style.menu}
        tabs={languageTabs}
        titleAria={languagesListTitleAria}
      />
      <div className={style.inputs}>
        <InputText {...inputText} wrapperStyle={style.nameWrapper} theme={'coorpmanager'} />
        <TextArea {...textArea} wrapperStyle={style.description} theme={'coorpmanager'} />

        <Cta
          onClick={cta.handleOnclick}
          className={style.button}
          buttonContentClassName={classNames([
            style.buttonContent,
            cta.type === 'delete' ? style.deleteButton : style.addButton
          ])}
        >
         { cta.type === 'delete' ? <Trash  className={style.deleteButtonIcon} /> :<AddIcon className={style.buttonIcon}/>}
          {cta.label}
        </Cta>
      </div>
    </div>
  );
}

PlayListTranslation.propTypes = {
  languageTabs: VerticalLanguageMenu.propTypes.tabs,
  inputText: InputText.propTypes,
  textArea: TextArea.propTypes,
  cta: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['delete', 'add'])
  }),
  languagesListTitleAria: PropTypes.string
};

export default PlayListTranslation;
