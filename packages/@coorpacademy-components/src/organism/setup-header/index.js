import React from 'react';
import {
  NovaCompositionCoorpacademyEditorialization as EyeIcon,
  NovaSolidTimeAlarm as AlarmIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaSolidContentContentViewModule1 as ListIcon,
  NovaSolidLoginLogout1 as LogoutIcon
} from '@coorpacademy/nova-icons';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import MenuList from '../../molecule/menu-list';
import style from './style.css';

const styles = {
  septenary: style.septenary,
  senary: style.senary,
  quinary: style.quinary,
  tertiary: style.tertiary,
  octonary: style.octonary,
  quaternary: style.quaternary
};

const Icons = {
  seeMyPlatform: EyeIcon,
  globalAnalytics: AnalyticsIcon,
  platformList: ListIcon,
  logout: LogoutIcon
};

const HeaderList = ({items, className}) => {
  return (
    <ul className={className}>
      {items.map((item, i) => {
        const Icon = Icons[item.key];
        if (item.type === 'image') {
          return (
            <li key={item.type + i} className={style.octonary}>
              <img src={item.image} />
            </li>
          );
        }
        return (
          <Link key={item.type + i} className={classnames(style.element, styles[item.variant])}>
            {/* <Icon height={12} width={12} color="inherit" /> */}
            <li>{item.title}</li>
          </Link>
        );
      })}
    </ul>
  );
};

const SetupHeader = props => {
  const {
    header: {leftItems, rightItems, href, user = {}, logo, logoMobile}
  } = props;
  // const {image = ''} = user;

  return (
    <div className={style.wrapper}>
      <HeaderList className={style.list} items={leftItems} />
      <HeaderList className={style.list} items={rightItems} />
    </div>
  );
};

SetupHeader.propTypes = {
  // menuItems: MenuList.propTypes.menuItems,
  href: Link.propTypes.href,
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string
  }),
  logo: Picture.propTypes.src,
  logoMobile: Picture.propTypes.src
};

export default SetupHeader;
