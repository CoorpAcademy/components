import React, {useState} from 'react';
import {filter, includes, map, some} from 'lodash/fp';
import PopulationOwners from '..';
import PersonTags from '../../../molecule/person-tags';
import {Person} from '../../../molecule/person-tags/types';
import {COLORS} from '../../../variables/colors';
import {makeModel, people, translate} from '../../../test/helpers/population-owners';
import unavailable from './fixtures/unavailable-self';
import errors from './fixtures/errors';
import loading from './fixtures/loading';
import readonly from './fixtures/readonly';

export default {title: 'Organism/PopulationOwners/Analytics owners'};

const frame: React.CSSProperties = {
  padding: 24,
  maxWidth: 1000,
  margin: 'auto',
  fontFamily: 'Gilroy, sans-serif',
  color: COLORS.cm_grey_700
};

// The story owns synthetic business state, as App will in the connected screen.
export const ControlledOwners = () => {
  const [selectedIds, setSelectedIds] = useState(['morgan', 'former']);
  const [query, setQuery] = useState('');
  const selected = map(
    person => ({
      ...person,
      onRemove: () => setSelectedIds(filter((id: string) => id !== person.id))
    }),
    filter(person => includes(person.id, selectedIds), people)
  );
  const suggestions = query.trim()
    ? map(
        person => ({
          ...person,
          onSelect: () => {
            setSelectedIds(ids => [...ids, person.id]);
            setQuery('');
          }
        }),
        filter(
          person =>
            person.status !== 'deactivated' &&
            !includes(person.id, selectedIds) &&
            some(
              value => value.toLowerCase().includes(query.toLowerCase()),
              [person.name, person.login]
            ),
          people
        )
      )
    : [];
  return (
    <div style={frame}>
      <h2>Analytics population owners</h2>
      <p>Synthetic interactions only. Search, add yourself or remove an owner; no API is called.</p>
      <PopulationOwners
        translate={translate}
        model={makeModel({
          query,
          selected,
          suggestions,
          selfSelected: includes('alex', selectedIds),
          warningCount: filter(person => person.status === 'deactivated', selected).length,
          onSearch: setQuery,
          onAddMe: () => setSelectedIds(ids => [...ids, 'alex'])
        })}
      />
      <hr />
      <h3>Card details: the same person tags, without removal actions</h3>
      <div data-testid="owner-details">
        <PersonTags users={selected} translate={translate} />
      </div>
    </div>
  );
};

export const UnavailableAndErrorStates = () => (
  <div style={frame}>
    <h2>Unavailable current profile</h2>
    <PopulationOwners {...unavailable.props} />
    <hr />
    <h2>Search and saved-owner resolution failures</h2>
    <PopulationOwners {...errors.props} />
    <hr />
    <h2>Search in progress</h2>
    <PopulationOwners {...loading.props} />
  </div>
);

const historicalPeople: Person[] = [
  {
    id: 'long',
    name: 'Alexandra Maximiliana de la Tour et du Bois',
    login: 'alexandra.maximiliana.very.long.login@example.invalid',
    current: true
  },
  {id: 'unknown', name: 'missing.owner', login: 'missing.owner', status: 'unknown'},
  {id: 'ambiguous', name: 'shared.owner', login: 'shared.owner', status: 'ambiguous'},
  people[2]
];

export const ReadOnlyAndHistoricalOwners = () => (
  <div style={frame}>
    <h2>Read-only population</h2>
    <PopulationOwners {...readonly.props} />
    <hr />
    <h2>Long names and historical account states</h2>
    <PersonTags users={historicalPeople} translate={translate} />
  </div>
);
