import {useState, useCallback, useMemo} from 'react';
import {debounce, filter, pipe, includes, toLower} from 'lodash/fp';

export const filterIcons = (query, allIcons) => {
  return query ? filter(pipe(toLower, includes(toLower(query))), allIcons) : allIcons;
};
const useIconSearch = allIcons => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(allIcons);

  const updateSearchResults = useCallback(
    query => {
      const results = filterIcons(query, allIcons);
      setSearchResults(results);
    },
    [allIcons]
  );

  const debouncedSearch = useMemo(() => debounce(300, updateSearchResults), [updateSearchResults]);

  const handleSearch = useCallback(
    value => {
      setSearchValue(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  const handleReset = useCallback(() => {
    setSearchValue('');
    updateSearchResults('');
  }, [updateSearchResults]);

  return {
    searchValue,
    searchResults,
    handleSearch,
    handleReset
  };
};

export default useIconSearch;
