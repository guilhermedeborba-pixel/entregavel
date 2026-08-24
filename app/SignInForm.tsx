import React, { useState, FormEvent } from 'react';
import Button from './button';




import Input from './componentes/Input';

export function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login realizado:', { email, password });
  };




  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '320px',
        width: '100%',
      }}
    >
      <h2>Entrar</h2>

      <Input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />

      <Button type="submit">Entrar</Button>
    </form>
  );
}