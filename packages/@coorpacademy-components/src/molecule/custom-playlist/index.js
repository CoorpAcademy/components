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






const CustomPlaylist = (props, context) => {
  const {translate, skin} = context;
  const brand = get('common.brand', skin);
  const medium = get('common.medium', skin);

  const {title} = props;
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{title}</div>
      <div className={style.settings}>
        <div>
      <Tag label="Published" type="published" />
      </div>
      <div className={style.edit}>
      <ButtonLink type="secondary" 
                    label="Edit"
                    ariaLabel="aria button"
                    dataName="default-button"
                    icon={{
                            position: "left",
                            type: "edit"
                          }}
      />
      </div> 
      </div>
    </div>
  );
};

CustomPlaylist.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

CustomPlaylist.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CustomPlaylist;
