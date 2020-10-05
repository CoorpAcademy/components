import React from 'react';
import PropTypes from 'prop-types';
import MoocHeader from '../../organism/mooc-header';
import Cta from '../../atom/cta';
import CardsList from '../../molecule/dashboard/cards-list';
import style from './style.css';

const TeamsDashboard = ({
  //
  logo,
  platformLink,
  sections
}) => {
  const buildSection = section => {
    return <CardsList {...section} />;
  };
  const sectionsList = sections.map(buildSection);
  // const {translate} = context;
  return (
    <div className={style.teamsDashboard}>
      <MoocHeader logo={logo} links={[platformLink]} />
      {sectionsList}
    </div>
  );
};

TeamsDashboard.propTypes = {
  // onUpload: PropTypes.func,
  // onInputTextChange: PropTypes.func,
  // onInputFileChange: PropTypes.func,
  // uploadedLink: PropTypes.string,
  // inputTextValue: PropTypes.string,
  logo: MoocHeader.propTypes.logo,
  platformLink: PropTypes.shape(Cta.propTypes),
  sections: PropTypes.arrayOf(PropTypes.shape(CardsList.propTypes))
};

// TeamsDashboard.contextTypes = {
//   translate: Provider.childContextTypes.translate
// };

export default TeamsDashboard;
