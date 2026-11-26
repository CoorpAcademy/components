import React from 'react';
import {map} from 'lodash/fp';
import Tag from '../../atom/tag';
import Icon from '../../atom/icon';
import {MembershipSummaryProps, summaryPropTypes} from './types';
import style from './style.css';

const MembershipSummary = ({groups, labels}: MembershipSummaryProps) =>
  groups.length > 0 ? (
    <div className={style.groups} data-name="membership-summary">
      {groups.map((group, groupIndex: number) => (
        <React.Fragment key={group.id}>
          {groupIndex > 0 ? (
            <div className={style.join}>
              <Tag type="advanced" label={labels.or} />
            </div>
          ) : null}
          <div className={style.group}>
            {group.rows.map((row, rowIndex: number) => (
              <div className={style.row} key={row.id}>
                <span className={style.logicalSlot}>
                  {rowIndex > 0 ? <Tag type="advanced" label={labels.and} /> : null}
                </span>
                <div className={style.sentence}>
                  {row.prefix ? <span>{row.prefix} </span> : null}
                  <Tag type="success" label={row.field} /> <span>{row.comparison}</span>
                  {map(
                    value => (
                      <React.Fragment key={value.id}>
                        {value.prefix === undefined ? ' ' : <span>{value.prefix}</span>}
                        <Tag type="info" label={value.label} />
                      </React.Fragment>
                    ),
                    row.values
                  )}
                  {row.note ? <span className={style.note}> {row.note}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  ) : (
    <div className={style.empty}>
      <span aria-hidden="true">
        <Icon iconName="filter" iconColor="currentColor" size={{faSize: 24, wrapperSize: 48}} />
      </span>
      <strong>{labels.emptyTitle}</strong>
      <p>{labels.emptyMessage}</p>
    </div>
  );

MembershipSummary.propTypes = summaryPropTypes;
export default MembershipSummary;
