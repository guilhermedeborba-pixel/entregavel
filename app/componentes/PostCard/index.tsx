import React from 'react';
import TitleDescriptionInfo from '../TitleDescriptionInfo';

export default function PostCard() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      
      <div style={{ position: 'relative', height: '180px', backgroundColor: '#e2d5bd' }}>
        <img
          src="https://placedog.net/800/300"
          alt="Capa"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid white',
          }}
        >
          <img
            src="https://placedog.net/100/100"
            alt="Avatar"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      
      <div style={{ padding: '40px 24px 20px 24px' }}>
        
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['Tag A', 'Tag B', 'Tag C'].map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: '#e5e7eb',
                borderRadius: '16px',
                padding: '4px 12px',
                fontSize: '12px',
                color: '#374151',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        
        <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 8px 0' }}>
          24, august, 2026
        </p>

        
        <div style={{ color: '#ef4444' }}>
          <TitleDescriptionInfo title="Title here" description="Subtitle here" />
        </div>

        
        <div
        style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
        paddingTop: '10px',
        borderTop: '1px solid #eee',
        }}
        >


          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>♥</span> 34
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>👁</span> 4
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>💬</span> 5
          </div>
        </div>
      </div>
    </div>
  );
}