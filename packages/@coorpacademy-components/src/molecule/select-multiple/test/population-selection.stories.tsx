import React, {useState} from 'react';
import {filter, includes, map} from 'lodash/fp';
import Autocomplete from '../../../atom/autocomplete';
import Tag from '../../../atom/tag';
import SelectMultiple from '..';
import fixture from './fixtures/sixty-catalogue-playlists';

export default {title: 'Molecule/SelectMultiple/Population selection'};

const departments = ['Finance', 'Legal', 'Operations'];

export const ControlledSelection = () => {
  const [query, setQuery] = useState('');
  const [values, setValues] = useState<string[]>([]);
  const [playlistQuery, setPlaylistQuery] = useState('');
  const [playlists, setPlaylists] = useState<string[]>([]);
  const matching = filter(
    (value: string) =>
      !includes(value, values) && value.toLowerCase().includes(query.toLowerCase()),
    departments
  );
  const suggestions = map((value: string) => ({name: value, value}), matching);
  if (query.trim() && !departments.some(value => value.toLowerCase() === query.toLowerCase())) {
    suggestions.push({name: `Add “${query}”`, value: query});
  }
  return (
    <div style={{width: 480, maxWidth: '100%', padding: 24, boxSizing: 'border-box'}}>
      <h2>Membership values</h2>
      <Autocomplete
        id="population-department-values"
        title="Department"
        aria-label="Department"
        theme="coorpmanager"
        value={query}
        suggestions={suggestions}
        showSuggestionsOnFocus
        keepSuggestionsOnSelect
        focusInputOnSuggestionClick
        onInput={(event: React.FormEvent<HTMLInputElement>) =>
          setQuery((event.target as HTMLInputElement).value)
        }
        onSuggestionSelected={({suggestion}: {suggestion: {value: string}}) => {
          setValues([...values, suggestion.value]);
          setQuery('');
        }}
      />
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12}}>
        {map(
          (value: string) => (
            <Tag
              key={value}
              type="info"
              label={value}
              removeAction={{
                label: `Remove ${value}`,
                onClick: () => setValues(filter(item => item !== value, values))
              }}
            />
          ),
          values
        )}
      </div>
      <h2>Coorpacademy catalogue playlists</h2>
      <SelectMultiple
        {...fixture.props}
        options={map(
          option => ({...option, selected: includes(option.value, playlists)}),
          fixture.props.options
        )}
        selectionLabel={`${playlists.length} playlists selected`}
        search={{...fixture.props.search, value: playlistQuery, onChange: setPlaylistQuery}}
        onChange={(selected: Array<{value: string}>) => setPlaylists(map('value', selected))}
      />
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12}}>
        {map(
          option => (
            <Tag
              key={option.value}
              type="info"
              label={option.name}
              removeAction={{
                label: `Remove ${option.name}`,
                onClick: () => setPlaylists(filter(value => value !== option.value, playlists))
              }}
            />
          ),
          filter(option => includes(option.value, playlists), fixture.props.options)
        )}
      </div>
    </div>
  );
};
