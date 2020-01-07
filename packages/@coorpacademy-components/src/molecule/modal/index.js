/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from 'react';
import {
  NovaLineContentEditionQuillCircle as QuillCircle,
  NovaSolidRemoveAddAddCircle2 as AddCircle,
  NovaSolidStatusClose as Close,
  NovaSolidStatusCheckCircle2 as Check,
  NovaCompositionCoorpacademyImportIcon as ImportIcon
} from '@coorpacademy/nova-icons';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import style from './style.css';

const Choice = ({title, subtitle, link, children}) => {
  return (
    <a className={style.choice} href={link}>
      <div className={style.choiceContent}>
        <div className={style.choiceLeftIconWrapper}>{children}</div>
        <div className={style.choiceDescription}>
          <h3 className={style.choiceDescriptionTitle}>{title}</h3>
          <span className={style.choiceDescriptionSubtitle}>{subtitle}</span>
        </div>
      </div>
      <div className={style.choiceRightIconWrapper}>
        <Check className={style.choiceRightIcon} />
      </div>
    </a>
  );
};

const Modal = props => {
  const {header, description, choices, onClose} = props;
  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <header className={style.header}>
          <div className={style.headerRightContent}>
            <div className={style.headerRightIconWrapper}>
              <AddCircle className={style.headerAddIcon} />
              <div className={style.shadow} />
            </div>
            <h3>{header}</h3>
          </div>
          <Close onClick={onClose} className={style.headerCloseIcon} />
        </header>
        <div className={style.description} dangerouslySetInnerHTML={{__html: description}} />
        <div className={style.choices}>
          <Choice
            key={choices.left.title}
            title={choices.left.title}
            subtitle={choices.left.subtitle}
            link={choices.left.link}
          >
            <QuillCircle className={style.choiceLeftIcon} />
          </Choice>
          <Choice
            key={choices.right.title}
            title={choices.right.title}
            subtitle={choices.right.subtitle}
            link={choices.right.link}
          >
            <ImportIcon className={style.choiceLeftIcon} />
          </Choice>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  choices: PropTypes.shape({
    left: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      link: PropTypes.string
    }),
    right: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      link: PropTypes.string
    })
  }),
  onClose: PropTypes.func
};

Modal.contextTypes = {
  skin: Provider.childContextTypes.skin
};
export default Modal;
