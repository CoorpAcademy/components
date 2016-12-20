import React from 'react';
import map from 'lodash/fp/map';
import Link from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const buildTab = tab => {
  const {
    title,
    href,
    selected
  } = tab;

  const className = selected ? style.selected : style.tab;

  return (
    <div className={className}>
      <Link href={href}>{title}</Link>
    </div>
  );
};

const conditions = checker.shape({
  props: checker.shape({
    tabs: checker.arrayOf(checker.shape({
      title: checker.string,
      href: checker.string,
      selected: checker.bool.optional
    })).optional
  }),
  children: checker.none
});

const BrandTabs = ({children, ...props}) => {
  const {
    tabs
  } = props;

  const tabsList = map(buildTab, tabs);

  return (
    <div className={style.wrapper}>
      {tabsList}
    </div>
  );
};

BrandTabs.validate = createValidate(conditions);
export default BrandTabs;
