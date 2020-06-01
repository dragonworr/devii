import React from 'react';
import { config } from '../globals';

export const Footer: React.FC = () => (
  <div
    style={{
      top: 0,
      width: '100%',
      height: '50px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#4fc2b4',
      color: 'white',
      padding: '30px',
      fontSize: '12pt',
    }}
  >
    {`© ${config.yourName} ${new Date().getFullYear()}`}
  </div>
);
