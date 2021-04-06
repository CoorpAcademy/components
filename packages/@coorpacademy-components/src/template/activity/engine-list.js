import React from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowLeft as ArrowLeft,
  NovaCompositionNavigationArrowRight as ArrowRight
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import EngineStars from './engine-stars';
import style from './engine-list.css';

// eslint-disable-next-line react/prefer-stateless-function
class EngineList extends React.Component {
  static propTypes = {
    engines: PropTypes.arrayOf(PropTypes.shape(EngineStars.propTypes))
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {engines = []} = this.props;
    const {skin} = this.context;
    const dark = getOr('#90A4AE', 'common.dark', skin);

    const engineTabs = engines.map(engine => <EngineStars {...engine} key={engine.type} />);

    const leftArrowView = (
      <div className={style.circle} onClick={this.handleOnLeft} data-name="card-list-left-arrow">
        <ArrowLeft color={dark} className={style.left} width={10} height={10} />
      </div>
    );
    const rightArrowView = (
      <div className={style.circle} onClick={this.handleOnRight} data-name="card-list-right-arrow">
        <ArrowRight color={dark} className={style.right} width={10} height={10} />
      </div>
    );

    return (
      <div className={style.allStars} data-name="engineList">
        <div className={style.navigationLeft}>{leftArrowView}</div>
        {engineTabs}
        <div className={style.navigationRight}>{rightArrowView}</div>
      </div>
    );
  }
}

export default EngineList;
