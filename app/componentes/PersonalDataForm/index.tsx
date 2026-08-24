import React from 'react';

export default function PersonalDataForm() {
  return (
    <form style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: 'sans-serif' }}>
      
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <input
            type="text"
            placeholder="Nome"
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid #ef4444',
              fontSize: '16px',
              color: '#ef4444',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
          <span style={{ fontSize: '12px', color: '#ef4444' }}>Error goes here</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <input
            type="text"
            placeholder="Sobrenome"
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid #ef4444',
              fontSize: '16px',
              color: '#ef4444',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
          <span style={{ fontSize: '12px', color: '#ef4444' }}>Error goes here</span>
        </div>
      </div>

      
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '16px',
              color: '#6b7280',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
          <span style={{ fontSize: '12px', color: '#6b7280' }}>Error goes here</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <input
            type="tel"
            placeholder="Celular"
            style={{
              padding: '12px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              fontSize: '16px',
              color: '#6b7280',
              outline: 'none',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
          <span style={{ fontSize: '12px', color: '#ef4444' }}>Error goes here</span>
        </div>
      </div>
      <br>
      </br>

      
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '6px',
          border: '1px solid #1d4ed8',
          backgroundColor: '#ffffff',
          color: '#1d4ed8',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '1px',
          cursor: 'pointer'
        }}
      >
        ENVIAR
      </button>

    </form>
  );
}