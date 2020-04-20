import React from 'react';
import { HeadingProps as GrommetHeadingProps, Image } from 'grommet';

type Props = GrommetHeadingProps & {
  variant: 'dark' | 'light';
  style?: any;
};

const Logo: React.FC<Props> = (props) => {
  const { variant = 'dark', style } = props;

  return (
    <Image
      style={style}
      src={require(`../assets/images/jsxc-icon-${variant}.svg`)}
      draggable={false}
      alt="JSXC Logo"
    />
  );
};

export default Logo;
