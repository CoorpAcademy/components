import React, {useEffect, useRef, useState} from 'react';
import {filter, includes} from 'lodash/fp';
import {
  rows,
  pageRows,
  listLabels,
  makeListModel,
  confirmation
} from '../../../../test/helpers/population-list';
import {PopulationShell} from './shell';

// Synthetic App coordination only; no runtime API, persistence or business store.
const ControlledList = ({pagination = false}: {pagination?: boolean}) => {
  const [records, setRecords] = useState(pagination ? pageRows : rows);
  const [archived, setArchived] = useState(false);
  const [visible, setVisible] = useState(25);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [pending, setPending] = useState(false);
  const [moreError, setMoreError] = useState<string>();
  const [failNext, setFailNext] = useState(pagination);
  const [archiveId, setArchiveId] = useState<string>();
  const [archiving, setArchiving] = useState(false);
  const [notice, setNotice] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const matches = filter(
    row =>
      row.archived === archived &&
      includes(search.toLowerCase(), row.title.toLowerCase()) &&
      (!type || row.typeTag.label === (type === 'rh' ? 'HR' : 'Analytics')),
    records
  );
  const selected = matches.slice(0, visible).map(row => ({
    ...row,
    memberLabel: row.archived ? undefined : row.memberLabel,
    primaryAction: {
      label: row.archived ? 'View' : 'Edit',
      onClick: () => setNotice(`${row.archived ? 'View' : 'Edit'}: ${row.title}`)
    },
    onArchive: () => setArchiveId(row.id),
    onReactivate: () =>
      setRecords(current =>
        current.map(item => (item.id === row.id ? {...item, archived: false} : item))
      )
  }));
  const loadMore = () => {
    setPending(true);
    setMoreError(undefined);
    timer.current = setTimeout(() => {
      setPending(false);
      if (failNext) {
        setMoreError('The next page could not be loaded. Your current results are kept.');
        setFailNext(false);
      } else setVisible(count => count + 25);
    }, 500);
  };
  return (
    <>
      {notice ? <p role="status">{notice}</p> : null}
      <PopulationShell
        labels={listLabels}
        selectedArchived={archived}
        active={String(records.filter(row => !row.archived).length)}
        archived={String(records.filter(row => row.archived).length)}
        onStatusChange={value => {
          setArchived(value);
          setVisible(25);
          setMoreError(undefined);
        }}
        model={makeListModel({
          rows: selected,
          search: query,
          onSearch: setQuery,
          onSubmitSearch: () => {
            setSearch(query);
            setVisible(25);
          },
          filter: {
            ...makeListModel().filter,
            value: type,
            onChange: value => {
              setType(value);
              setVisible(25);
            }
          },
          resultLabel: `${selected.length} of ${matches.length} populations`,
          hasMore: selected.length < matches.length,
          loadingMore: pending,
          moreError,
          onLoadMore: loadMore,
          onCreate: () => setNotice('Create population — the editor is delivered in POP-017.')
        })}
        confirmation={
          archiveId
            ? {
                ...confirmation,
                busy: archiving,
                onCancel: () => setArchiveId(undefined),
                onConfirm: () => {
                  setArchiving(true);
                  timer.current = setTimeout(() => {
                    setRecords(current =>
                      current.map(row => (row.id === archiveId ? {...row, archived: true} : row))
                    );
                    setArchiving(false);
                    setArchiveId(undefined);
                  }, 500);
                }
              }
            : undefined
        }
      />
    </>
  );
};
export default ControlledList;
