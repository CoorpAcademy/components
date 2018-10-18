import React, {Component} from 'react';
import map from 'lodash/fp/map';
import {Motion, spring} from 'react-motion';

import Button from '../../atom/button';
import Loader from '../../atom/loader';
import Provider from '../../atom/provider';
import TeamAvatar from './teamAvatar';
import MotionnedTeam from './motionned-team';
import style from './style.css';

const _map = map.convert({cap: false});

const Logo = () => <div className={style.logo} />;

const Cta = ({cta, disabledButton}) => {
  if (!cta) {
    return null;
  }

  if (disabledButton) {
    return <Loader className={style.loader} />;
  }

  return (
    <Button
      className={style.button}
      onClick={() => {
        this.setState({
          disabledButton: true
        });
        cta.onClick();
      }}
      disabled={disabledButton}
      submitValue={cta.submitValue}
    />
  );
};

const MotionnedOtherTeams = ({team}) => {
  const computedWidth = 100 / 4;

  return (
    <Motion defaultStyle={{scale: 1}} style={{scale: team.isMyTeam ? spring(0) : 1}}>
      {interpolatedStyle => {
        return (
          <div
            style={{
              width: `${computedWidth}%`,
              transform: `scale(${interpolatedStyle.scale})`,
              margin: '0 10px'
            }}
          >
            <TeamAvatar key={team.name} {...team} />
          </div>
        );
      }}
    </Motion>
  );
};

class TeamBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledButton: false
    };
  }

  render() {
    const {teams, cta, title, myTeam} = this.props;
    const {disabledButton} = this.state;

    const Title = title ? <h1 className={style.title}>{title}</h1> : null;

    const infoJoinTeam =
      myTeam && `You've joined ${myTeam.name}: ${myTeam.numberSlotTaken}/${myTeam.members.length}`;

    return (
      <div className={style.teamBuilder}>
        <Logo />
        {Title}
        <Cta disabledButton={disabledButton} cta={cta} />
        <MotionnedTeam {...myTeam} title={infoJoinTeam} />
        <div className={style.teams}>
          {_map((team, index) => {
            return <MotionnedOtherTeams key={`OtherTeam${index}`} team={team} />;
          }, teams)}
        </div>
      </div>
    );
  }
}

TeamBuilder.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamBuilder;
