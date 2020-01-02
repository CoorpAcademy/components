import React from 'react';
import {NovaLineQuillCircle as QuillCircle} from '@coorpacademy/nova-icons';
import PropTypes from 'prop-types';
import style from './style.css';

const Modal = props => {
  const {header, description, choices} = props;

  return (
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <header className={style.header}>
          <h3>Create new course</h3>
          <span>X</span>
        </header>
        <div className={style.description}>
          <p>Select the type of course you want to create.</p>
          <p>You can either create or add an existing course.</p>
        </div>
        <div className={style.choices}>
          <div className={style.choice}>
            <div className={style.choiceContent}>
              <div className={style.choiceDescription}>
                <h3>Create course</h3>
                <span>with Coorpacademy</span>
              </div>
            </div>
          </div>
          <div className={style.choice}>
            {/* <QuillCircle style={{width: 40, height: 30, color: 'red'}} /> */}
            <div className={style.choiceContent}>
              <div className={style.choiceDescription}>
                <h3>Add course</h3>
                <span>Scorm, Youtube, Link</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string
    })
  )
};

export default Modal;
