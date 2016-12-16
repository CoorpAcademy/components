import Inferno from 'inferno';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import Header from '../../../organism/header';
import content from './content';

const conditions = checker.shape({
  props: checker.shape({
    rootUrl: checker.url.optional,
    connexionLink: checker.url.optional,
    inscriptionLink: checker.url.optional
  }),
  children: checker.none
});

const CoorpHeader = ({children, ...props}, {translate}) => {
  const headerProps = content(translate, props);

  return (
    <Header {...headerProps}/>
  );
};

CoorpHeader.validate = createValidate(conditions);
export default CoorpHeader;
