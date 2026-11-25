import React from 'react';
import Tag from '../../../tag';
import Icon from '../../../icon';
import {COLORS} from '../../../../variables/colors';

const fixture = {
  props: {
    interactive: true,
    'aria-label': 'Membership conditions',
    closeToolTipInformationTextAriaLabel: 'Press Escape to close membership details',
    placement: 'bottom',
    AnchorElement: function DetailsAnchor(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
      return (
        <button
          {...props}
          type="button"
          style={{border: 0, background: 'transparent', cursor: 'pointer', padding: 8}}
        >
          <Icon
            iconName="filter"
            iconColor={COLORS.cm_primary_blue}
            size={{faSize: 16, wrapperSize: 24}}
          />
        </button>
      );
    },
    TooltipContent: function DetailsContent() {
      return (
        <div style={{display: 'grid', gap: 12}}>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center'}}>
            <Tag label="Department" type="success" /> is <Tag label="Finance" type="info" /> or{' '}
            <Tag label="Legal" type="info" />
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center'}}>
            <Tag label="AND" type="advanced" /> <Tag label="Country" type="success" /> is not{' '}
            <Tag label="Germany" type="info" />
          </div>
          <div>
            <Tag label="OR" type="advanced" />
          </div>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center'}}>
            <Tag label="Department" type="success" /> starts with{' '}
            <Tag label="Operations" type="info" />
          </div>
        </div>
      );
    }
  }
};

export default fixture;
