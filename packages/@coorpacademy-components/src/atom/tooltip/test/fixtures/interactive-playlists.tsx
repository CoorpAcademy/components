import React from 'react';
import {map, range} from 'lodash/fp';
import Tag from '../../../tag';

const fixture = {
  props: {
    interactive: true,
    'aria-label': 'Catalogue playlists',
    closeToolTipInformationTextAriaLabel: 'Press Escape to close playlist details',
    placement: 'bottom',
    TooltipContent: function DetailsContent() {
      return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
          {map(
            index => (
              <Tag
                key={index}
                label={`Catalogue playlist ${index + 1} — Leadership and professional development`}
                type="info"
              />
            ),
            range(0, 60)
          )}
        </div>
      );
    }
  }
};

export default fixture;
