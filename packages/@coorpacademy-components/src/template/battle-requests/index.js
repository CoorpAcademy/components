import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Provider from '../../atom/provider';
import CardWithButton from '../../molecule/card-with-button';
import Avatar from '../../atom/avatar';
import style from './style.css';

const Battles = (props, context) => {
  const {translate} = context;
  const battles = props.battles;
  const trads = props.trads;
  return (
    <ul className={style.cards}>
      {map(battle => {
        const challengeLabel = translate('is challenging you', {
          username: `<strong>${battle.username}</strong>`,
          courseName: `<p><strong>${battle.courseName}</strong></p>`
        });
        const battleCardProps = {
          username: battle.username,
          courseName: battle.courseName,
          primaryButtonLabel: trads.battleCTA,
          lightButtonLabel: trads.reviewCTA,
          tagLabel: battle.tagLabel,
          onLightButtonClick: battle.onLightButtonClick,
          onPrimaryButtonClick: battle.onPrimaryButtonClick,
          backgroundImg: battle.backgroundImg
        };
        return (
          <li key={battle.id} className={style.cardsItem}>
            <div className={style.card}>
              <CardWithButton {...battleCardProps}>
                <div className={style.injection}>
                  <Avatar url={battle.urlAvatar} />
                </div>
                <div
                  className={style.wrapper}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: challengeLabel
                  }}
                />
              </CardWithButton>
            </div>
          </li>
        );
      }, battles)}
    </ul>
  );
};

Battles.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Battles.propTypes = {
  battles: PropTypes.arrayOf(PropTypes.shape(CardWithButton.PropTypes)).isRequired,
  trads: PropTypes.objectOf(PropTypes.string)
};

export default Battles;
