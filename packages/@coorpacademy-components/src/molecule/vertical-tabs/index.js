import React from 'react';
import PropTypes from 'prop-types';
import {NovaSolidStatusCheckCircle2 as CheckIcon} from '@coorpacademy/nova-icons';
import {snakeCase} from 'lodash/fp';
import Link from '../../atom/link';
import style from './style.css';

const LeftIcons = {
  BlueValidatedCircle: CheckIcon
};

const buildTab = (tab, index) => {
  const {title, href, selected, onClick, leftIcon, rightIcon} = tab;
  const className = selected ? style.selectedTab : style.notSelectedTab;

  const LeftIcon = LeftIcons[leftIcon];
  return (
    <li
      data-name={`vertical_tab_${snakeCase(title)}`}
      className={className}
      key={index}
      onClick={onClick}
    >
      <div>
        {rightIcon}
        <Link href={href} className={style.title}>
          {title}
        </Link>
      </div>
      {LeftIcon ? <LeftIcon className={style.leftIcon} /> : null}
    </li>
  );
};

const VerticalTabs = props => {
  const {tabs} = props;
  const tabsList = tabs.map(buildTab);

  return <ul className={style.wrapper}>{tabsList}</ul>;
};

VerticalTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: Link.propTypes.children,
      href: Link.propTypes.href,
      selected: PropTypes.bool,
      leftIcon: PropTypes.string,
      rightIcon: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};
export default VerticalTabs;
