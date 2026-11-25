import React from 'react';
import Tooltip from '..';
import {COLORS} from '../../../variables/colors';
import playlistFixture from './fixtures/interactive-playlists';
import conditionsFixture from './fixtures/interactive-conditions';
import ownersFixture from './fixtures/interactive-owners';

export default {title: 'Atom/Tooltip/Population details'};

export const RichDetails = () => (
  <div
    style={{
      fontFamily: 'Gilroy, sans-serif',
      padding: 32,
      maxWidth: 720,
      color: COLORS.cm_grey_700
    }}
  >
    <h2>Population details</h2>
    <p>
      Hover over a details button or use Tab to focus it. Press Tab again to scroll the content with
      the keyboard. Escape closes details.
    </p>
    <div
      style={{
        overflow: 'hidden',
        border: `1px solid ${COLORS.cm_grey_200}`,
        borderRadius: 12,
        padding: 24,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}
    >
      <strong>Finance teams</strong>
      <span style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
        Conditions <Tooltip {...conditionsFixture.props} />
      </span>
      <span style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
        60 catalogue playlists <Tooltip {...playlistFixture.props} />
      </span>
      <span style={{display: 'inline-flex', gap: 8, alignItems: 'center'}}>
        3 owners <Tooltip {...ownersFixture.props} />
      </span>
    </div>
    <button type="button" style={{marginTop: 24}}>
      Continue after the card
    </button>
    <p>
      The card clips its contents. Details still render above its boundary. These are synthetic
      display examples; population rules and identities are supplied by callers.
    </p>
  </div>
);

export const ViewportEdges = () => (
  <div style={{height: '100vh', fontFamily: 'Gilroy, sans-serif'}}>
    <p style={{padding: '70px 48px', textAlign: 'center'}}>
      Open details in each corner. Resize the browser to check placement and scroll through all 60
      playlists.
    </p>
    <div style={{position: 'fixed', top: 16, left: 16}}>
      <Tooltip {...playlistFixture.props} aria-label="Top left playlists" placement="left" />
    </div>
    <div style={{position: 'fixed', top: 16, right: 16}}>
      <Tooltip {...playlistFixture.props} aria-label="Top right playlists" placement="right" />
    </div>
    <div style={{position: 'fixed', bottom: 16, left: 16}}>
      <Tooltip {...playlistFixture.props} aria-label="Bottom left playlists" placement="bottom" />
    </div>
    <div style={{position: 'fixed', bottom: 16, right: 16}}>
      <Tooltip {...playlistFixture.props} aria-label="Bottom right playlists" placement="bottom" />
    </div>
  </div>
);
