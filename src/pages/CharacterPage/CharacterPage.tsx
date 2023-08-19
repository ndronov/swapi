import { useRecoilValue } from 'recoil';

import { characterPageModeState } from '@stores/index';

import { CharacterView, CharacterForm } from './components';

export function CharacterPage() {
  const mode = useRecoilValue(characterPageModeState);

  switch (mode) {
    case 'view':
      return <CharacterView />;

    case 'edit':
      return <CharacterForm />;

    default:
      return null;
  }
}
