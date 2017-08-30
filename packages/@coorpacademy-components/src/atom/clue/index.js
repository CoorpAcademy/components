import React from 'react';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import PropTypes from 'prop-types';
import ClueIcon from '@coorpacademy/nova-icons/solid/programming/programming-jigsaw';
import Provider from '../provider';
import Loader from '../loader';
import style from './style.css';

const LoadedClue = ({primaryColor, text}) => {
  return (
    <div data-name="text" className={style.clueText}>
      <div className={style.logo}>
        <ClueIcon color={primaryColor} />
      </div>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: text}}
      />
    </div>
  );
};

const Clue = (props, context) => {
  const {text} = props;
  const {skin} = context;
  const brandColor = get('common.brand', skin);
  const isLoading = isNil(text);
  const inlineStyle = isLoading ? {} : {backgroundColor: brandColor};

  return (
    <div data-name="clue" className={style.wrapperClue}>
      <div className={isLoading ? style.loadingClue : style.clue} style={inlineStyle}>
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
