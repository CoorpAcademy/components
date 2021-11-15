import React from 'react';
import PropTypes from 'prop-types';
import VerticalLanguageMenu from '../../molecule/vertical-tabs';
import InputText from '../../atom/input-text';
import TextArea from '../../atom/input-textarea';
import Button from '../../atom/button-link';
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
        <div className={style.button}>
          <Button
            onClick={cta.handleOnclick}
            type={cta.type === 'delete' ? 'text-negative' : 'primary'}
            icon={{type: cta.type === 'delete' ? 'deleteIcon' : 'addIcon', position: 'left'}}
            label={cta.label}
          />
        </div>
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
