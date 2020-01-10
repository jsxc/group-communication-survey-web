import React from 'react';
import { Text, TextProps } from 'grommet';

type Props = TextProps & {
  visible: boolean;
};

const ErrorText: React.FC<Props> = props => {
  const { visible, children } = props;

  return (
    <Text margin={{ vertical: 'small' }} color="red">
      {visible ? children : ''}
    </Text>
  );
};

export default ErrorText;
