import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionCoorpacademyBolt as BoltIcon} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Link from '../../../atom/link';
import style from './style.css';

const StartBattle = (props, context) => {
  const {label, onClick, href} = props;
  const {skin} = context;

  const white = get('common.white', skin);
  const battleColor = get('common.battle', skin);

  return (
    <div className={style.container} data-name="start-battle">
      {/* <div className={style.wrapper}>
        <div className={style.start}>
          <Link className={style.animate} onClick={onClick} href={href}>
            <div className={style.backBubble}>
              <BoltIcon color={battleColor} className={style.icon} />
            </div>
            <div className={style.bubble} />
            <div className={style.iconBubble}>
              <BoltIcon color={white} className={style.icon} />
            </div>
            <div
              className={style.label}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: label}}
            />
          </Link>
        </div>
      </div> */}

      <div className={style.arrows}>
        <svg
          width="50"
          height="90"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M71.4778 111.363L19.8986 58.7213H42.3247L18.9303 17.9995L71.5721 69.9215H48.1605L71.4778 111.363Z"
              fill="#FFD942"
            />
            <path
              d="M71.4778 111.363L60.886 100.549L43.6444 69.9215H48.1519L71.4778 111.363ZM67.0646 69.9215L24.826 28.2657L18.9303 17.9995L71.5721 69.9215H67.0646Z"
              fill="#FFA81C"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0.930267"
              y="-0.000457764"
              width="88.6418"
              height="129.364"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 0.658824 0 0 0 0 0.109804 0 0 0 0.5 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

StartBattle.contextTypes = {
  skin: Provider.childContextTypes.skin
};

StartBattle.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default StartBattle;
