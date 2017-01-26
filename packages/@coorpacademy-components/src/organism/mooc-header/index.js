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
            <a className={style.logo}
              href="#"
            >
              <img src="https://www.coorpacademy.com/assets/img/logo.svg" />
            </a>
            <div className={style.themes}>
              <div className={style.currentOption}>Digital<span className={style.caret} /></div>
              <div className={style.optionsGroup}>
                <a href='#'
                  className={style.option}
                >
                  All
                </a>
                <a href='#'
                  className={style.option}
                >
                  Esprit du temps
                </a>
                <a href='#'
                  className={style.option}
                >
                  Gérer son épargne
                </a>
                <a href='#'
                  className={style.option}
                >
                  Le monde du projet
                </a>
              </div>
            </div>
          </div>
          <div className={style.menuWrapper}>
            <div className={style.pages}>
              <div className={style.page}>Explore<span className={style.bar} /></div>
              <div className={style.page}>Battles<span className={style.bar} /></div>
              <div className={style.more}>
                <div className={style.currentOption}>More<span className={style.caret} /></div>
                <div className={style.optionsGroup}>
                  <a href='#'
                    className={style.option}
                  >
                    News
                  </a>
                  <a href='#'
                    className={style.option}
                  >
                    Médias
                  </a>
                  <a href='#'
                    className={style.option}
                  >
                    Discussions
                  </a>
                  <a href='#'
                    className={style.option}
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
            <div className={style.links}>
              <div className={style.link}>Connexion<div className={style.fill} /></div>
              <div className={style.link}>Inscription<div className={style.fill} /></div>
            </div>
            <div className={style.settings}>
              <div className={style.settingsToggle}
                onClick={this.handleSettingsToggle}
              />
              <div className={this.state.isSettingsOpen ? style.settingsWrapper : style.none}>
                <div className={style.settingsGroup}>
                  <div className={style.setting}>
                    <div className={style.label}>Langue</div>
                  </div>
                </div>
                <div className={style.closeSettings}
                  onClick={this.handleSettingsToggle}
                >
                  Fermer
                </div>
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
