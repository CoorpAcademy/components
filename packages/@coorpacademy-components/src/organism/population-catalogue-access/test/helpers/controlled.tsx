import React, {useState} from 'react';
import {filter, includes, map, some, uniq} from 'lodash/fp';
import PopulationCatalogueAccess from '../..';
import {
  catalogueLabels,
  cataloguePlaylists,
  creation,
  customPlaylists,
  makeChoices,
  makeModel,
  makeSelection
} from '../../../../test/helpers/population-catalogue-access';

// Synthetic App-owned state, never imported by the production component.
export default function ControlledCatalogue({
  initialIds,
  initialQuery = '',
  startWithNoChoice = false
}: {
  initialIds?: string[];
  initialQuery?: string;
  startWithNoChoice?: boolean;
}) {
  const [mode, setMode] = useState<string | undefined>(startWithNoChoice ? undefined : 'selected');
  const [ids, setIds] = useState(
    initialIds ?? (startWithNoChoice ? [] : ['catalogue-1', 'catalogue-2'])
  );
  const [query, setQuery] = useState(initialQuery);
  const [expanded, setExpanded] = useState(false);
  const selected = makeSelection(ids);
  const model = makeModel({
    customPlaylists: startWithNoChoice ? creation.customPlaylists : customPlaylists,
    choices: makeChoices(mode, setMode),
    warning: includes('catalogue-0', ids)
      ? 'A selected catalogue playlist has no content. Remove it when you are ready.'
      : undefined,
    selection:
      mode === 'selected'
        ? {
            ...selected,
            query,
            selected: map(
              item => ({...item, onRemove: () => setIds(filter(id => id !== item.id, ids))}),
              expanded ? selected.selected : selected.selected.slice(0, 8)
            ),
            toggle:
              ids.length > 8
                ? {
                    label: expanded ? 'Show less' : `Show all ${ids.length} selected playlists`,
                    action: {onClick: () => setExpanded(previous => !previous)}
                  }
                : undefined,
            onSearch: setQuery,
            onChange: choices => setIds(map('value', choices)),
            selectAll: {
              disabled: !some(
                item => item.count > 0 && !includes(item.id, ids),
                cataloguePlaylists
              ),
              onClick: () =>
                setIds(
                  uniq([
                    ...ids,
                    ...map(
                      'id',
                      filter(item => item.count > 0, cataloguePlaylists)
                    )
                  ])
                )
            },
            clear: {disabled: ids.length === 0, onClick: () => setIds([])}
          }
        : undefined
  });
  return <PopulationCatalogueAccess model={model} labels={catalogueLabels} />;
}
