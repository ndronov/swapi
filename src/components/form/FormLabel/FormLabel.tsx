import cn from 'classnames';

interface Props {
  htmlFor: string;
  isInvalid?: boolean;
  label: string;
}

export function FormLabel(props: Props) {
  const { htmlFor, isInvalid, label } = props;

  return (
    <label htmlFor={htmlFor} className={cn('text-overflow-ellipsis', { 'p-error': isInvalid })}>
      {label}
    </label>
  );
}
