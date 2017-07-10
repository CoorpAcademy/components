import React from 'react';
import {SrcPropType} from '../../../util/proptypes';
import Header from '../../../organism/header';
import content from './content';

const CoorpHeader = props => {
  const headerProps = content(props);

  return <Header {...headerProps} />;
};

CoorpHeader.propTypes = {
  rootUrl: SrcPropType,
  connexionLink: SrcPropType,
  inscriptionLink: SrcPropType
};

export default CoorpHeader;
