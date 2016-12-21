import React from 'react';
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

const CoorpHeader = (props, context) => {
  const {translate = identity} = context;
  const headerProps = content(translate, props);

  return (
    <Header {...headerProps}/>
  );
};

CoorpHeader.contextTypes = {
  translate: React.PropTypes.function
};

CoorpHeader.validate = createValidate(conditions);
export default CoorpHeader;
