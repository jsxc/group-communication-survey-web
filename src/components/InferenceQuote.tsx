import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

type Props = {
  tooltipText: string;
};

const InferenceQuote: React.FC<Props> = props => {
  const { children, tooltipText } = props;

  return (
    <Tooltip title={tooltipText} placement="right" arrow={true}>
      <div
        style={{
          marginBottom: -16,
          marginLeft: -25,
          marginRight: 16,
          paddingLeft: 12,
          paddingRight: 12,
          paddingBottom: 4,
          background: '#b2b2b2',
          borderRadius: 20,
          alignSelf: 'start',
        }}
      >
        <p style={{ fontSize: 14 }}>{children}</p>
      </div>
    </Tooltip>
  );
};

export default InferenceQuote;
