import React from 'react';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import PropTypes from 'prop-types';
import ClueIcon from '@coorpacademy/nova-icons/solid/programming/programming-jigsaw';
import Provider from '../provider';
import Loader from '../loader';
import style from './style.css';

const LoadedClue = ({brandColor, text}) => {
  return (
    <div className={style.clueText}>
      <div className={style.logo}>
        <ClueIcon color={brandColor} />
      </div>
      {text}
    </div>
  );
};

const Clue = (props, context) => {
  const {text} = props;
  const {skin} = context;
  const brandColor = get('common.brand', skin);

  const isLoading = isNil(text);

  return (
    <div className={style.wrapperClue}>
      <div className={isLoading ? style.loadingClue : style.clue}>
        {isLoading ? <Loader /> : <LoadedClue text={text} brandColor={brandColor} />}
      </div>
    </div>
  );
};

Clue.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Clue.propTypes = {
  text: PropTypes.string
};

export default Clue;
