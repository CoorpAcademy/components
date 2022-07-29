import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

const PlayerResult = (props) => {
  const { mode } = props;
  return (
    <div className={style.organismPlayerResultContainer}>
      <div>
        <div className={style.largeCricle}>
          <div className={style.mediumCricle}>
            <div className={style.smallCricle}>
              <div className={style.resultContenantContainer}>
                <div className={style.statusPlayerResult} >Congratulations!</div>
                {mode}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerResult;
