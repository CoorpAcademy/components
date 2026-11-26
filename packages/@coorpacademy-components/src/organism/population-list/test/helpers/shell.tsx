import React from 'react';
import BrandUpdate from '../../../../template/back-office/brand-update';
import defaults from '../../../../template/back-office/brand-update/test/fixtures/default';
import {PopulationListProps} from '../../types';

export const PopulationShell = ({
  active = '2000',
  archived = '3',
  selectedArchived = false,
  onStatusChange,
  ...props
}: PopulationListProps & {
  active?: string | null;
  archived?: string;
  selectedArchived?: boolean;
  onStatusChange?(isArchived: boolean): void;
}) => (
  <BrandUpdate
    {...defaults.props}
    items={[
      {
        title: 'Administration',
        key: 'administration',
        selected: true,
        href: '#administration',
        type: 'collapsibleTab',
        tabs: [
          {
            title: 'Populations',
            href: '#populations',
            selected: true,
            subTabs: [
              {
                title: 'Active',
                href: '#active',
                selected: !selectedArchived,
                status: active === null ? undefined : active,
                onClick: () => onStatusChange?.(false)
              },
              {
                title: 'Archived',
                href: '#archived',
                selected: selectedArchived,
                status: archived,
                onClick: () => onStatusChange?.(true)
              }
            ]
          }
        ]
      }
    ]}
    content={{...props, type: 'cohort-administration'}}
  />
);
