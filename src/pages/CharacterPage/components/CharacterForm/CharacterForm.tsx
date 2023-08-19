import React from 'react';
import { useResetRecoilState } from 'recoil';
import { Button } from 'primereact/button';

import { Form, FormInputText, FormSubmit } from '@components/form';
import { characterPageModeState } from '@stores/index';

import { useCharacterForm } from './useCharacterForm';

export function CharacterForm() {
  const formProps = useCharacterForm();

  const cancel = useResetRecoilState(characterPageModeState);

  return (
    <Form className="w-20rem p-fluid pl-4 pt-6 flex flex-column gap-5" {...formProps}>
      <FormInputText label="Name" name="name" />
      <FormInputText label="Birth Year" name="birth_year" />
      <FormInputText label="Gender" name="gender" />
      <FormInputText label="Mass" name="mass" />
      <FormInputText label="Height" name="height" />
      <FormInputText label="Hair color" name="hair_color" />
      <FormInputText label="Eye color" name="eye_color" />

      <FormSubmit label="Save" touchedOnly validOnly />
      <Button label="Cancel" onClick={cancel} className="w-full" outlined type="button" />
    </Form>
  );
}
