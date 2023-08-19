import React from 'react';
import { InputText, InputTextProps } from 'primereact/inputtext';
import { useField } from 'formik';
import cn from 'classnames';

import { FormLabel } from '../FormLabel';
import { isFieldInvalid } from '../common';

import classes from './FormInputText.module.css';

interface Props extends Omit<InputTextProps, 'required'> {
  label: string;
  name: string;
}

export function FormInputText(props: Props) {
  const { className, label, name, ...rest } = props;

  const [field, meta] = useField<string>({ name });

  const isInvalid = isFieldInvalid(meta);

  return (
    <div className={className}>
      <span className="p-float-label">
        <InputText
          className={cn({ 'p-invalid': isInvalid })}
          id={name}
          name={name}
          onBlur={field.onBlur}
          onChange={field.onChange}
          value={field.value ?? ''}
          tooltip={isInvalid ? meta.error : undefined}
          tooltipOptions={{
            className: classes.error,
            event: 'both',
            position: 'bottom',
          }}
          {...rest}
        />

        <FormLabel htmlFor={name} label={label} isInvalid={isInvalid} />
      </span>
    </div>
  );
}
