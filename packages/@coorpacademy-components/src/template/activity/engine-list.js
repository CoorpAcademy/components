import React from 'react';
import PropTypes from 'prop-types';
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

    const engineTabs = engines.map(engine => <EngineStars {...engine} key={engine.type} />);

    return (
      <div className={style.allStars} data-name="engineList">
        {engineTabs}
      </div>
    );
  }
}

export default EngineList;
