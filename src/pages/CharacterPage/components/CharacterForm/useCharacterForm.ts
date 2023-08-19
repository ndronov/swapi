import { useCallback, useMemo } from 'react';
import { useResetRecoilState } from 'recoil';

import { characterPageModeState } from '@stores/index';
import { useCharacter } from '@hooks/index';

import { characterFormSchema } from './schema';
import { CharacterFormValues, UseCharacterForm } from './declarations';

export function useCharacterForm(): UseCharacterForm {
  const { character, setCharacter } = useCharacter();

  const close = useResetRecoilState(characterPageModeState);

  const initialValues = useMemo(
    () => ({
      birth_year: character?.birth_year,
      eye_color: character?.eye_color,
      gender: character?.gender,
      hair_color: character?.hair_color,
      height: character?.height,
      mass: character?.mass,
      name: character?.name,
    }),
    [
      character?.birth_year,
      character?.eye_color,
      character?.gender,
      character?.hair_color,
      character?.height,
      character?.mass,
      character?.name,
    ],
  );

  const onSubmit = useCallback(
    async (values: CharacterFormValues) => {
      setCharacter(values);
      close();
    },
    [close, setCharacter],
  );

  return {
    initialValues,
    onSubmit,
    validationSchema: characterFormSchema,
  };
}
