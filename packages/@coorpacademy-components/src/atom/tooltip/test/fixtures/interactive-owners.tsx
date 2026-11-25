import React from 'react';
import Tag from '../../../tag';

const fixture = {
  props: {
    interactive: true,
    'aria-label': 'Analytics owners',
    closeToolTipInformationTextAriaLabel: 'Press Escape to close owner details',
    placement: 'bottom',
    TooltipContent: function DetailsContent() {
      return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
          <Tag label="Alex Martin · You" type="success" />
          <Tag label="Morgan Taylor" type="info" />
          <Tag label="Former owner · Deactivated" type="warning" />
        </div>
      );
    }
  }
};

export default fixture;
