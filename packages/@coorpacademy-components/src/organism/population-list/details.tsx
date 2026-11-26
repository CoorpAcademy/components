import React, {useCallback} from 'react';
import {map} from 'lodash/fp';
import ToolTip from '../../atom/tooltip';
import Tag from '../../atom/tag';
import Icon from '../../atom/icon';
import Loader from '../../atom/loader';
import {COLORS} from '../../variables/colors';
import PersonTags from '../../molecule/person-tags';
import MembershipSummary from '../../molecule/membership-summary';
import {OwnerDetails, PlaylistDetails, PopulationListLabels, PopulationRow} from './types';
import {ReadButton} from './read-button';
import style from './details.css';

const CUSTOM_TAG_STYLE = {
  backgroundColor: COLORS.purple_100,
  color: COLORS.purple_700
};

const DetailTip = ({
  label,
  icon,
  instructions,
  children
}: {
  label: string;
  icon: 'filter' | 'users' | 'circle-info';
  instructions: string;
  children: React.ReactNode;
}) => {
  const Anchor = useCallback(
    (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button {...props} type="button" className={style.info}>
        <Icon iconName={icon} iconColor="currentColor" size={{faSize: 12, wrapperSize: 16}} />
      </button>
    ),
    [icon]
  );
  return (
    <ToolTip
      interactive
      aria-label={label}
      closeToolTipInformationTextAriaLabel={instructions}
      AnchorElement={Anchor}
      TooltipContent={children}
      placement="bottom"
    />
  );
};

const Insight = ({
  details,
  labels,
  children
}: {
  details: Pick<PlaylistDetails, 'loading' | 'error'>;
  labels: PopulationListLabels;
  children: React.ReactNode;
}) => (
  <>
    {details.loading ? (
      <div className={style.loading} role="status">
        <Loader theme="coorpmanager" />
        <span>{labels.loadingDetails}</span>
      </div>
    ) : null}
    {details.error ? (
      <div className={style.error} role="alert">
        <span>{details.error.message}</span>
        {details.error.retry ? <ReadButton action={details.error.retry} /> : null}
      </div>
    ) : null}
    {children}
  </>
);

const PlaylistInfo = ({
  details,
  custom,
  labels
}: {
  details: PlaylistDetails;
  custom?: boolean;
  labels: PopulationListLabels;
}) => (
  <div className={style.detail}>
    <span>
      <Tag
        type={custom ? 'advanced' : 'info'}
        customStyle={custom ? CUSTOM_TAG_STYLE : {}}
        label={details.label}
      />
    </span>
    {details.items.length > 0 || details.loading || details.error ? (
      <DetailTip
        label={details.ariaLabel}
        icon="circle-info"
        instructions={labels.tooltipInstructions}
      >
        <Insight details={details} labels={labels}>
          <ul className={style.playlists} aria-label={details.ariaLabel}>
            {map(item => {
              const tag = (
                <Tag
                  type={custom ? 'advanced' : 'info'}
                  customStyle={custom ? CUSTOM_TAG_STYLE : {}}
                  label={item.name}
                />
              );
              return (
                <li key={item.id}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {tag}
                    </a>
                  ) : (
                    tag
                  )}
                </li>
              );
            }, details.items)}
          </ul>
        </Insight>
      </DetailTip>
    ) : null}
  </div>
);

const OwnerInfo = ({details, labels}: {details: OwnerDetails; labels: PopulationListLabels}) => (
  <div className={style.detail}>
    <Tag type="info" label={details.label} />
    <DetailTip label={details.ariaLabel} icon="users" instructions={labels.tooltipInstructions}>
      <Insight details={details} labels={labels}>
        <PersonTags
          users={details.items}
          labels={labels.people}
          mode="display"
          aria-label={details.ariaLabel}
        />
      </Insight>
    </DetailTip>
  </div>
);

export const PopulationSubtitle = ({
  row,
  labels
}: {
  row: PopulationRow;
  labels: PopulationListLabels;
}) => (
  <div className={style.subtitle}>
    {row.memberLabel ? <span>{row.memberLabel}</span> : null}
    <DetailTip label={row.conditionsLabel} icon="filter" instructions={labels.tooltipInstructions}>
      <MembershipSummary groups={row.conditionGroups} labels={labels.summary} />
    </DetailTip>
  </div>
);

export const PopulationDetails = ({
  row,
  labels
}: {
  row: PopulationRow;
  labels: PopulationListLabels;
}) => (
  <div className={style.details}>
    {row.accessLabel ? <span>{row.accessLabel}</span> : null}
    {row.cataloguePlaylists ? (
      <PlaylistInfo details={row.cataloguePlaylists} labels={labels} />
    ) : null}
    {row.customPlaylists ? (
      <PlaylistInfo details={row.customPlaylists} custom labels={labels} />
    ) : null}
    {row.ownerInformation ? <OwnerInfo details={row.ownerInformation} labels={labels} /> : null}
  </div>
);
