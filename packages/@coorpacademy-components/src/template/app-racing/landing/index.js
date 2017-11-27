import React from 'react';
import Header from './landing-header';
import Footer from './landing-footer';
import PlayersList from './players-list';
import style from './style.css';

const AppRacingLanding = props => {
  return (
    <div className={style.landingPage}>
      <Header team={props.team} />
      <PlayersList players={props.players} team={props.team} />
      <Footer teams={props.teams} />
    </div>
  )
};

export default AppRacingLanding;
