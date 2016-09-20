//import createImageLink from '../../molecule/image-link';
import createMenuList from '../../molecule/menu-list';
// import createSsMenuList from '../../molecule/ssmenu-list';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import toPairs from 'lodash/fp/toPairs';
import join from 'lodash/fp/join';
import isObject from 'lodash/fp/isObject';
import isNil from 'lodash/fp/isNil';
import {checker, createValidate} from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    href: checker.string,
    src: checker.oneOfType([
      checker.string,
      checker.objectOf(checker.url)
    ]).optional,
    menuitem: checker.arrayOf(
      checker.shape({
        title: checker.string.optional
      })
    ).optional
  }).strict
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  //const ImageLink = createImageLink(treant, options);
  const MenuList = createMenuList(treant, options);
  //const SsMenuList = createSsMenuList(treant, options);

  const Header = (props, children) => {
    const {href, menuitem, title = []} = props;

    return (
        <div className={style.static}>
            // <ImageLink
            //     {...props}
            //     href={createHref(props.href)}
            //     onClick={onClick(props)
            // />

            <MenuList
                {...menulistProps}>
                {MenuitemDiv}
            </MenuList>

            HEADER
        </div>
    );
  };

  Header.validate = createValidate(conditions);
  return Header;
};
