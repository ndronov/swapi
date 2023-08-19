import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { People } from 'swapi-ts';
import { DataViewPageEvent } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import { useDebounce } from 'ahooks';

import { charactersState } from '@stores/index';
import { PeopleData } from '@declarations/index';

import { addIndexToCharacter } from './logic';

const SEARCH_INPUT_DEBOUNCE_DELAY = 300;
const PER_PAGE = 10;

interface UseCharactersArgs {
  prefetch?: boolean;
  toast?: Toast | null;
}

export function useCharacters(args: UseCharactersArgs = {}) {
  const { prefetch = false, toast } = args;

  const [updateTrigger, setUpdateTrigger] = useState(0);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const searchDebounced = useDebounce(search, { wait: SEARCH_INPUT_DEBOUNCE_DELAY });

  const [totalCount, setTotalCount] = useState(0);
  const [firstItemIndex, setFirstItemIndex] = useState(0);

  const [characters, setCharacters] = useRecoilState(charactersState);

  const fetchCharacters = async () => {
    try {
      setLoading(true);

      const data: PeopleData = await People.getPage(page, searchDebounced);

      setTotalCount(data.count);

      setCharacters(() => {
        const updatedCharacters = [];
        const startIndex = (page - 1) * PER_PAGE;

        for (let i = 0; i < data.results.length; i++) {
          const characterIndex = startIndex + i;
          updatedCharacters[startIndex + i] = addIndexToCharacter(data.results[i], characterIndex + 1);
        }

        return updatedCharacters;
      });
    } catch {
      toast?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'An error occurred, please try again',
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePagination = (event: DataViewPageEvent) => {
    setPage(event.page + 1);
    setFirstItemIndex(event.first);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch('');
  };

  useEffect(() => {
    setUpdateTrigger(Date.now());
  }, [page]);

  useEffect(() => {
    if (page === 1) {
      setUpdateTrigger(Date.now());

      return;
    }

    setPage(1);
    // eslint-disable-next-line
  }, [searchDebounced]);

  useEffect(() => {
    if (prefetch) void fetchCharacters();
    // eslint-disable-next-line
  }, [prefetch, updateTrigger, setCharacters, toast]);

  return {
    characters,
    firstItemIndex,
    handleChangeSearch,
    handleClearSearch,
    handlePagination,
    loading,
    page,
    perPage: PER_PAGE,
    search,
    setCharacters,
    totalCount,
  };
}
