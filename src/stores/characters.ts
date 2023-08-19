import { atom } from 'recoil';

import { Character, CharacterPageMode } from '@declarations/index';

export const charactersState = atom<Character[]>({
  key: 'charactersState',
  default: [],
});

export const characterPageModeState = atom<CharacterPageMode>({
  key: 'characterPageModeState',
  default: 'view',
});
