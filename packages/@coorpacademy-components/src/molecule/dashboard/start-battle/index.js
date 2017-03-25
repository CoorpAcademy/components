import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import style from './style.css';

const StartBattle = (props, context) => {
  const skin = context;
  const {
    label,
    onClick
  } = props;

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.start}>
          <div className={style.animate}
            onClick={onClick}
          >
            <div className={style.icon} />
            <div className={style.bubble}>
              <div className={style.icon} />
            </div>
            <div className={style.label}
              dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
                __html: label
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

StartBattle.contextTypes = {
  skin: React.PropTypes.object
};

StartBattle.propTypes = {
  label: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default StartBattle;
