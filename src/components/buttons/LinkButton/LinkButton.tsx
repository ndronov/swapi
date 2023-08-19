import { Link } from 'react-router-dom';
import { Button, ButtonProps } from 'primereact/button';
import cn from 'classnames';

import classes from './LinkButton.module.css';

interface Props extends ButtonProps {
  buttonClassName?: string;
  href?: string;
  to?: string;
}
export function LinkButton(props: Props) {
  const { to, href, className, buttonClassName, ...restProps } = props;

  const linkClass = cn(classes.link, className, 'flex no-underline outline-none');
  const button = <Button className={cn(classes.button, buttonClassName, 'flex-1')} tabIndex={-1} {...restProps} />;

  if (to) {
    return (
      <Link className={linkClass} to={to}>
        {button}
      </Link>
    );
  }

  return (
    <a className={linkClass} href={href}>
      {button}
    </a>
  );
}
