import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

class MoocHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingsOpen: false
    };

    this.handleSettingsToggle = this.handleSettingsToggle.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleSettingsToggle() {
    this.setState(prevState => ({
      isSettingsOpen: !prevState.isSettingsOpen
    }));
  }

  render() {
    const {translate = identity} = this.context;

    return (
      <div className={style.wrapper}>
        <div className={style.header}>
          <div className={style.logoWrapper}>
            <a href="#">
              <img src="https://www.coorpacademy.com/assets/img/logo.svg" />
            </a>
          </div>
          <div className={style.menuWrapper}>
            <div className={style.pages}>
              <div className={style.page}>Explore<span className={style.bar} /></div>
              <div className={style.page}>Battles<span className={style.bar} /></div>
              <div className={style.page}>News<span className={style.bar} /></div>
            </div>
            <div className={style.links}>
              <div className={style.link}>Connexion<div className={style.fill} /></div>
              <div className={style.link}>Inscription<div className={style.fill} /></div>
            </div>
            <div className={style.settings}>
              <div className={style.settingsToggle}
                onClick={this.handleSettingsToggle}
              />
              <div className={this.state.isSettingsOpen ? style.settingsGroup : style.none}>
                <div className={style.setting}>
                </div>
                <div className={style.closeSettings}>Fermer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MoocHeader.propTypes = {

};
export default MoocHeader;
