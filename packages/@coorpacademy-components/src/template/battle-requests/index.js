import React from 'react';
import PropTypes from 'prop-types';
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
      {battles.map(battle => {
        const challengeLabel = translate('is challenging you', {
          username: `<strong>${battle.username}</strong>`,
          courseName: `<p><strong>${battle.courseName}</strong></p>`
        });
        const battleCardProps = {
          username: battle.username,
          courseName: battle.courseName,
          primaryButtonLabel: trads.battleCTA,
          secondaryButtonLabel: trads.reviewCTA,
          tagLabel: battle.tagLabel,
          onSecondaryButtonClick: battle.onSecondaryButtonClick,
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
      })}
    </ul>
  );
};

Battles.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Battles.propTypes = {
  battles: PropTypes.arrayOf(PropTypes.shape(CardWithButton.PropTypes)),
  trads: PropTypes.objectOf(PropTypes.string)
};

export default Battles;
