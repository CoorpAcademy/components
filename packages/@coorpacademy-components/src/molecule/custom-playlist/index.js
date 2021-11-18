import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionNavigationArrowDown as ArrowDownIcon,
  NovaCompositionNavigationArrowTop as ArrowUpIcon
} from '@coorpacademy/nova-icons';
import {get} from 'lodash/fp';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';

import style from './style.css';






const SetupSection = (props, context) => {
  const {translate, skin} = context;
  const brand = get('common.brand', skin);
  const medium = get('common.medium', skin);

  const {title, onUp, onDown, display, contentTypes} = props;
  const colorUp = onDown ? brand : medium;
  const colorDown = onUp ? brand : medium;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
     
      <div className={style.settings}>
      <Tag label="Published" type="published" />
        
        <ButtonLink type="tertiary" 
                    label="Edit"
                    ariaLabel="aria button"
                    dataName="default-button"
                    icon={{
                            position: "left",
                            type: "edit"
                          }}
          />
        {/* <div className={style.arrowSection}>
          <ArrowDownIcon
            color={colorUp}
            className={onDown ? style.arrow : style.disabled}
            onClick={onDown}
          />
          <ArrowUpIcon
            color={colorDown}
            className={onUp ? style.arrow : style.disabled}
            onClick={onUp}
          />
        </div> */}
      </div>
    </div>
  );
};

SetupSection.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SetupSection.propTypes = {
  title: PropTypes.string.isRequired,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  
  
};

export default SetupSection;
