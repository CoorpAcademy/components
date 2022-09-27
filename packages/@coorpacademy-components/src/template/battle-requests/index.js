import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import CardWithButton from '../../molecule/card-with-button';
import Avatar from '../../atom/avatar';
import style from './style.css';

const Battles = (props, context) => {
  const {translate} = context;
  const {battles, trads} = props;
  return (
    <ul className={style.cards}>
      {map(battle => {
        const challengeLabel = translate('is challenging you', {
          username: `<strong>${battle.username}</strong>`,
          courseName: `<p><strong>${battle.courseName}</strong></p>`
        });
        const battleCardProps = {
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
                  className={classnames(style.wrapper, style.innerHTML)}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{__html: challengeLabel}}
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
  battles: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      courseName: PropTypes.string,
      tagLabel: CardWithButton.propTypes.tagLabel,
      onLightButtonClick: CardWithButton.propTypes.onLightButtonClick,
      onPrimaryButtonClick: CardWithButton.propTypes.onPrimaryButtonClick,
      backgroundImg: CardWithButton.propTypes.backgroundImg
    })
  ).isRequired,
  trads: PropTypes.shape({
    battleCTA: PropTypes.string.isRequired,
    reviewCTA: PropTypes.string.isRequired
  }).isRequired
};

export default Battles;
