import React from 'react';
import every from 'lodash/fp/every';
import identity from 'lodash/fp/identity';
import Button from '../../../../atom/button';
import style from './style.css';

const fakeAppTranslate = identity;

const areTeamsReady = every(team => team.ready);

const LandingFooter = props => {
  const {teams} = props;
  const ready = areTeamsReady(teams);
  const message = !ready && fakeAppTranslate('Toutes les équipes doivent être au complet pour commencer');

  return (
    <div className={style.footer}>
      <Button submitValue={fakeAppTranslate('Commencer')} disabled={!ready} />
      <div className={style.readyMessage}>{message}</div>
    </div>
  );
}

export default LandingFooter;
