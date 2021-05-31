import React from 'react';
import PropTypes from 'prop-types';
// import {get} from 'lodash/fp';
import {NovaCompositionCoorpacademyBolt as BoltIcon} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Link from '../../../atom/link';
import LeftArrow from '../../../atom/left-arrow';
import RightArrow from '../../../atom/right-arrow ';
import style from './style.css';

const StartBattle = (props, context) => {
  const {onClick, href} = props;
  // const {skin} = context;

  // const white = get('common.white', skin);
  //  const battleColor = get('common.battle', skin);

  return (
    <div className={style.container} data-name="start-battle">
      {/* <div className={style.wrapper}>
        <div className={style.start}>
          <Link className={style.animate} onClick={onClick} href={href}>
            <div className={style.backBubble}>
              <BoltIcon color={battleColor} className={style.icon} />
            </div>
            <div className={style.bubble} />
            <div className={style.iconBubble}>
              <BoltIcon color={white} className={style.icon} />
            </div>
            <div
              className={style.label}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: label}}
            />
          </Link>
        </div>
      </div> */}
      <div className={style.wrapper}>
        <div className={style.left}>
          <LeftArrow />
        </div>
        <div>
          <p>Become a champion</p>
          <h2>Chanlenge your colleagues</h2>

          <Link onClick={onClick} href={href}>
            <button className={style.bouton} type="submit">
              Create a battle
            </button>
          </Link>
        </div>
        <div className={style.right}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
};

StartBattle.contextTypes = {
  skin: Provider.childContextTypes.skin
};

StartBattle.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default StartBattle;
