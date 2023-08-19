import { useParams } from 'react-router-dom';

import { Character } from '@declarations/index';

import { useCharacters } from './useCharacters';

export function useCharacter() {
  const { index = '' } = useParams();
  const parsedIndex = parseInt(index, 10) - 1;

  const { characters, setCharacters } = useCharacters();
  const character = characters[parsedIndex];

  const setCharacter = (update: Partial<Character>) => {
    setCharacters((currentCharacters) => {
      const updatedCharacters = [...currentCharacters];

      updatedCharacters[parsedIndex] = { ...updatedCharacters[parsedIndex], ...update };

      return updatedCharacters;
    });
  };

  return {
    setCharacter,
    character,
  };
}
