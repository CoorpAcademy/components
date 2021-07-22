import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyBigFlashRight as FlashRight,
  NovaCompositionCoorpacademyBigFlashLeft as FlashLeft
} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Link from '../../../atom/link';
import style from './style.css';

const StartBattle = (props, context) => {
  const {startBattleText, becomeAChampionText, challengeText, onClick, href} = props;

  return (
    <div className={style.root} data-name="start-battle">
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.start}>
            <div className={style.leftFlashes}>
              <FlashLeft className={style.bigFlashLeft} />
              <FlashLeft className={style.smallFlashLeft} />
            </div>
            <div className={style.middle}>
              <div className={style.becomeText}>
                <FlashLeft className={style.smallFlashLeftMobile} />
                {becomeAChampionText}
                <FlashRight className={style.smallFlashRightMobile} />
              </div>
              <div className={style.challengeText}>{challengeText}</div>
              <Link className={style.button} onClick={onClick} href={href}>
                {startBattleText}
              </Link>
            </div>
            <div className={style.rightFlashes}>
              <FlashRight className={style.bigFlashRight} />
              <FlashRight className={style.smallFlashRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StartBattle.contextTypes = {
  skin: Provider.childContextTypes.skin
};

StartBattle.propTypes = {
  startBattleText: PropTypes.string,
  becomeAChampionText: PropTypes.string,
  challengeText: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default React.memo(StartBattle);
