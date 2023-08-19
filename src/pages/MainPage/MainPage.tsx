import { useRef } from 'react';
import { DataView } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import cn from 'classnames';

import { useCharacters } from '@hooks/index';

import { CharacterTemplate, MainPageHeader } from './components';

import classes from './MainPage.module.css';

export function MainPage() {
  const toastRef = useRef<Toast>(null);

  const {
    characters,
    firstItemIndex,
    handleChangeSearch,
    handleClearSearch,
    handlePagination,
    loading,
    perPage,
    search,
    totalCount,
  } = useCharacters({
    prefetch: true,
    toast: toastRef.current,
  });

  return (
    <>
      <DataView
        className={cn('h-screen relative', classes.dataView)}
        first={firstItemIndex}
        header={
          <MainPageHeader onChangeSearch={handleChangeSearch} onClearSearch={handleClearSearch} search={search} />
        }
        itemTemplate={CharacterTemplate}
        loading={loading}
        onPage={handlePagination}
        paginator
        paginatorClassName="absolute bottom-0 left-0 right-0"
        rows={perPage}
        totalRecords={totalCount}
        value={characters}
      />

      <Toast ref={toastRef} />
    </>
  );
}
