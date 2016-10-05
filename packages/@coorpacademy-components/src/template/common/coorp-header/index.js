import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import createHeader from '../../../organism/header';
import content from './content';

const conditions = checker.shape({
  props: checker.shape({
    rootUrl: checker.url.optional,
    connexionLink: checker.url.optional,
    inscriptionLink: checker.url.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;
  const Header = createHeader(treant, options);

  const CoorpHeader = (props, children) => {
    const headerProps = content(translate, props);

    return (
      <Header {...headerProps}/>
    );
  };

  CoorpHeader.validate = createValidate(conditions);
  return CoorpHeader;
};
