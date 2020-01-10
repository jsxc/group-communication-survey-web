import React from 'react';
import { Text, TextProps } from 'grommet';

type Props = TextProps & {
  visible: boolean;
};

const ErrorText: React.FC<Props> = props => {
  const { visible, children, ...rest } = props;

  return (
    <Text color="red" {...rest}>
      {visible ? children : ''}
    </Text>
  );
};

export default ErrorText;
