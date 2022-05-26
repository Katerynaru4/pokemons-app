import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface IHeadingLevel {
  [n: string]: number;
}
const HEADING_LEVEL: IHeadingLevel = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4,
  xs: 5,
  xxs: 6,
};
interface HeadingProps {
  children?: string | React.ReactNode;
  type?: 'xl' | 'l' | 'm' | 's' | 'xs';
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({ children, type = 'l', className }) => {
  const headingProps = {
    className: cn(s.heading, `h${HEADING_LEVEL[type]}`, className),
  };

  return React.createElement(`h${HEADING_LEVEL[type]}`, headingProps, children);
};

export default Heading;
