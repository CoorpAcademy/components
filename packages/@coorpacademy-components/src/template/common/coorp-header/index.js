import React from 'react';
import {UrlPropType} from '../../../util/proptypes';
import Header from '../../../organism/header';
import content from './content';

const CoorpHeader = props => {
  const headerProps = content(props);

  return <Header {...headerProps} />;
};

CoorpHeader.propTypes = {
  rootUrl: UrlPropType,
  connexionLink: UrlPropType,
  inscriptionLink: UrlPropType
};

export default CoorpHeader;
