import { FormProps } from '@components/form';

export interface CharacterFormValues {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
}

export type UseCharacterForm = FormProps<CharacterFormValues>;
