import { Link } from 'react-router-dom';
import cn from 'classnames';

import { FULL_CHARACTER_ROUTE } from '@common/routes';

import classes from './CharacterTemplate.module.css';

interface Props {
  name: string;
  index: number;
}

export function CharacterTemplate(props: Props) {
  const { name, index } = props;

  return (
    <div className={cn('w-full', classes.template)}>
      <Link to={`${FULL_CHARACTER_ROUTE}/${index}`} className="block p-4 text-2xl font-bold text-900">
        {name}
      </Link>
    </div>
  );
}
