import React from 'react';
import style from '../../with-avatar.css';
import Avatar from '../../../../atom/avatar';

export default {
  props: {
    username: 'User',
    courseName: 'courseName',
    secondaryButtonLabel: 'Review course',
    primaryButtonLabel: 'Start battle',
    tagLabel: 'Coach',
    onSecondaryButtonClick: () => console.log('test onClickButtonCourse'),
    onPrimaryButtonClick: () => console.log('test onClickButtonBattle'),
    backgroundImg: 'https://img.bfmtv.com/c/1256/708/c32/01a671c64243d70195cbe64a18f2a.jpg'
  },
  children: (
    <div>
      <div className={style.injection}>
        <div className={style.avatar}>
          <Avatar url="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg" />
        </div>
      </div>
      <div className={style.wrapper}>
        <span>
          <strong>Avatar </strong>is challenging you
          <p>
            <strong>Coorpacademy</strong>
          </p>
        </span>
      </div>
    </div>
  )
};
