import { useSetRecoilState } from 'recoil';
import { Navigate } from 'react-router-dom';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';
import cn from 'classnames';

import { LinkButton } from '@components/buttons';
import { characterPageModeState } from '@stores/index';
import { useCharacter } from '@hooks/index';
import { FULL_INDEX_ROUTE } from '@common/index';

import classes from './CharacterView.module.css';

export function CharacterView() {
  const { character } = useCharacter();

  const setPageMode = useSetRecoilState(characterPageModeState);

  if (!character) {
    return <Navigate to={FULL_INDEX_ROUTE} replace />;
  }

  return (
    <div className={cn('flex p-4 gap-4 flex-column w-20rem', classes.container)}>
      <Fieldset legend="Name">{character.name}</Fieldset>
      <Fieldset legend="Birth Year">{character.birth_year}</Fieldset>
      <Fieldset legend="Gender">{character.gender}</Fieldset>
      <Fieldset legend="Mass">{character.mass}</Fieldset>
      <Fieldset legend="Height">{character.height}</Fieldset>
      <Fieldset legend="Hair color">{character.hair_color}</Fieldset>
      <Fieldset legend="Eye color">{character.eye_color}</Fieldset>

      <Button label="Edit" onClick={() => setPageMode('edit')} type="button" />
      <LinkButton label="Close" to={FULL_INDEX_ROUTE} outlined type="button" />
    </div>
  );
}
