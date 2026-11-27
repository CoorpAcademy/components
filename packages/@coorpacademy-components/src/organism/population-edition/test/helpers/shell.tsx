import React from 'react';
import BrandUpdate from '../../../../template/back-office/brand-update';
import defaults from '../../../../template/back-office/brand-update/test/fixtures/default';
import HeaderWithActions from '../../../header-with-actions';
import {HeaderWithActionsProps} from '../../../header-with-actions/types';
import PopulationEdition from '../..';
import {PopulationEditionProps} from '../../types';

export const EditorShell = ({
  header,
  ...props
}: PopulationEditionProps & {header: HeaderWithActionsProps}) => (
  <BrandUpdate
    {...defaults.props}
    header={{...header, type: 'header-with-actions'}}
    items={[
      {
        title: 'Administration',
        key: 'administration',
        selected: true,
        href: '#administration',
        type: 'collapsibleTab',
        tabs: [{title: 'Populations', href: '#populations', selected: true}]
      }
    ]}
    content={{...props, type: 'population-edition'}}
  />
);
export const IsolatedEditor = ({
  header,
  ...props
}: PopulationEditionProps & {header: HeaderWithActionsProps}) => (
  <div style={{padding: 20, maxWidth: 1100, margin: 'auto'}}>
    <div style={{marginBottom: 32}}>
      <HeaderWithActions {...header} />
    </div>
    <PopulationEdition {...props} />
  </div>
);
