import React from 'react';

const InferenceQuote: React.FC = props => {
  const { children } = props;

  return (
    <div
      style={{
        marginBottom: -16,
        marginLeft: -25,
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
  );
};

export default InferenceQuote;
