import React from 'react';
import PropTypes from 'prop-types';
import VerticalLanguageMenu from '../../molecule/vertical-tabs';
import InputText from '../../atom/input-text';
import TextArea from '../../atom/input-textarea';
import Button from '../../atom/button-link';
import style from './style.css';

function PlayListTranslation(props) {
  const {languageTabs, inputText, textArea, cta, 'list-aria-label': listAriaLabel} = props;

  const ariaLabel = {'aria-label': listAriaLabel}
  return (
    <div className={style.container}>
      <VerticalLanguageMenu
        className={style.menu}
        tabs={languageTabs}
        {...ariaLabel}
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
  inputText:  PropTypes.shape({...InputText.propTypes}),
  textArea:  PropTypes.shape({...TextArea.propTypes}),
  cta: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['delete', 'add'])
  }),
  'list-aria-label': PropTypes.string
};

export default PlayListTranslation;
