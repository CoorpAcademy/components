import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../../../util/proptypes';
import Header from '../../../organism/header';
import content from './content';

const CoorpHeader = props => {
  const headerProps = content(props);

  return (
    <Header {...headerProps} />
  );
};

CoorpHeader.propTypes = {
  rootUrl: CustomPropTypes.url,
  connexionLink: CustomPropTypes.url,
  inscriptionLink: CustomPropTypes.url
};

export default CoorpHeader;
