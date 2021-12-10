import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VerticalLanguageMenu from '../../molecule/vertical-tabs';
import InputText from '../../atom/input-text';
import TextArea from '../../atom/input-textarea';
import Button from '../../atom/button-link';
import style from './style.css';

const buildCtaButton = cta => {
  if (!cta) {
    return;
  }

  return (
    <div className={classNames(style.button, style.binButton)}>
      <Button
        onClick={cta.handleOnclick}
        type="text"
        icon={{type: 'bin', position: 'left'}}
        label={cta.label}
      />
    </div>
  );
};

const PlayListTranslation = props => {
  const {languageTabs, inputText, textArea, cta, 'list-aria-label': listAriaLabel} = props;
  const ctaButton = buildCtaButton(cta);

  const ariaLabel = {'aria-label': listAriaLabel};
  return (
    <div className={style.container}>
      <VerticalLanguageMenu {...ariaLabel} className={style.menu} tabs={languageTabs} />
      <div className={style.horizontalSection}>
        <div className={style.input}>
          <InputText {...inputText} />
        </div>
        <div className={style.input}>
          <TextArea {...textArea} />
        </div>
        {ctaButton}
      </div>
    </div>
  );
};

PlayListTranslation.propTypes = {
  languageTabs: VerticalLanguageMenu.propTypes.tabs,
  inputText: PropTypes.shape({...InputText.propTypes, theme: PropTypes.string}),
  textArea: PropTypes.shape({...TextArea.propTypes, theme: PropTypes.string}),
  cta: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['delete'])
  }),
  'list-aria-label': PropTypes.string
};

export default PlayListTranslation;
