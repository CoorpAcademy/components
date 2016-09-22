import createImageLink from '../../atom/image-link';
import createMenuList from '../../molecule/menu-list';
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
    menuItems: checker.arrayOf(
      checker.shape({
        title: checker.string.optional
      })
    ).optional,
    imageLogo: checker.arrayOf(
      checker.shape({
        href: checker.string.optional,
        src: checker.oneOfType([
          checker.string,
          checker.objectOf(checker.url)
        ]).optional
      })
    ).optional
  })
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const ImageLink = createImageLink(treant, options);
  const MenuList = createMenuList(treant, options);

  const Header = (props, children) => {
    const {menuItems, src, href} = props;

    return (
        <div className={style.static}>
          <div className={style.Logo}>
            <ImageLink
              src={src}
              href={href}
            />
          </div>
          <div className={style.Navigation}>
            <MenuList menuItems={menuItems} />
          </div>
        </div>
    );
  };

  Header.validate = createValidate(conditions);
  return Header;
};

