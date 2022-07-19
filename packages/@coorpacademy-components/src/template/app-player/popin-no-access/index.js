import React from 'react';
import PropTypes from 'prop-types';
import CMPopin from '../../../molecule/cm-popin';

const PopinNoAccess = props => {
    const {content, icon, backgroundImageUrl, descriptionText} = props
    return (
        <div>
            <CMPopin
                content={content}
                icon={icon}
                backgroundImageUrl={backgroundImageUrl}
                descriptionText={descriptionText}
            />
        </div>
    );
};

PopinNoAccess.propTypes = {
    content: PropTypes.string,
    icon: PropTypes.string,
    backgroundImageUrl: PropTypes.string,
    descriptionText: PropTypes.string
  };

export default PopinNoAccess;
