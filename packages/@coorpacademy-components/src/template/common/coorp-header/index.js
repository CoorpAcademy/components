import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import Header from '../../../organism/header';
import content from './content';

// const conditions = checker.shape({
//   props: checker.shape({
//     rootUrl: checker.url.optional,
//     connexionLink: checker.url.optional,
//     inscriptionLink: checker.url.optional
//   })
// });

const CoorpHeader = (props, context) => {
  const {translate = identity} = context;
  const headerProps = content(translate, props);

  return (
    <Header {...headerProps}/>
  );
};

CoorpHeader.contextTypes = {
  translate: React.PropTypes.func
};

// CoorpHeader.validate = createValidate(conditions);
export default CoorpHeader;
