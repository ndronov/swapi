import { IPeople } from 'swapi-ts';

export function addIndexToCharacter(character: IPeople, index: number) {
  return { ...character, index };
}
