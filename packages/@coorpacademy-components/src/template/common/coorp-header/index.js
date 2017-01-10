import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import * as CustomPropTypes from '../../../util/proptypes';
import Header from '../../../organism/header';
import content from './content';

const CoorpHeader = (props, context) => {
  const {translate = identity} = context;
  const headerProps = content(translate, props);

  return (
    <Header {...headerProps} />
  );
};

CoorpHeader.contextTypes = {
  translate: React.PropTypes.func
};

CoorpHeader.propTypes = {
  rootUrl: CustomPropTypes.url,
  connexionLink: CustomPropTypes.url,
  inscriptionLink: CustomPropTypes.url
};

export default CoorpHeader;
