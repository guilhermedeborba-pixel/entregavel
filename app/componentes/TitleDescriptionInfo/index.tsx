import React from 'react';

type TitleDescriptionInfoProps = {
  title: string;
  description: string;
};

export default function TitleDescriptionInfo({ title, description }: TitleDescriptionInfoProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0, color: '#000000' }}>
        {title}

        
      </h1>
      <p style={{ fontSize: '16px', color: '#333333', margin: 0 }}>
        {description}
      </p>
    </div>
  );
}