import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Tag from '../../atom/tag';
import {ButtonLinkProps} from '../../atom/button-link/types';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import headerWithActionsPropTypes, {HeaderWithActionsProps} from './types';
import style from './style.css';

const getDataName = (suffix: string) => `header-with-actions-${suffix}`;
// @ts-expect-error (need to get the index)
const uncappedMap = map.convert({cap: false});

const HeaderWithActions = (props: HeaderWithActionsProps) => {
  const {closeButton, title, tag, saveStatus, bulletPointMenuButton, actionButtons} = props;

  return (
    <div className={style.headerWrapper} data-name={getDataName('wrapper')}>
      <div
        className={style.titleAndButtonWrapper}
        data-name={getDataName('title-and-button-wrapper')}
      >
        <ButtonLinkIcon {...closeButton} className={style.button} />
        <div className={style.titleWrapper}>
          <div className={style.statusWrapper}>
            <Tag {...tag} />
            {saveStatus.display && saveStatus.label ? (
              <p className={style.saveStatus}>{saveStatus.label}</p>
            ) : null}
          </div>
          <h3 className={style.title} aria-label={title} data-name={getDataName('title')}>
            {title}
          </h3>
        </div>
      </div>
      <div className={style.buttonsWrapper} data-name={getDataName('buttons-wrapper')}>
        {bulletPointMenuButton && !isEmpty(bulletPointMenuButton.buttons) ? (
          <BulletPointMenuButton {...bulletPointMenuButton} buttonAriaLabel="More actions" />
        ) : null}
        {uncappedMap((action: ButtonLinkProps, key: string) => {
          return <ButtonLink {...action} key={key} />;
        }, actionButtons)}
      </div>
    </div>
  );
};

HeaderWithActions.propTypes = headerWithActionsPropTypes;

export default HeaderWithActions;
