import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface Props {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
  search: string;
}
export function MainPageHeader(props: Props) {
  const { onChangeSearch, onClearSearch, search } = props;

  return (
    <>
      <InputText onChange={onChangeSearch} placeholder="Search" value={search} className="mr-1" />
      <Button icon="pi pi-times" text onClick={onClearSearch} title="Clear search" disabled={!search} type="button" />
    </>
  );
}
