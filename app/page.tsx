"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h2>Trabalho</h2>
      <p>Selecione uma das rotas abaixo para visualizar os componentes:</p>
      
      <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <li>
          <Link href="/exemplos/basico">1. Exemplo Básico (/exemplos/basico)Clique aqui para acessar</Link>
        </li>
        <br>
        </br>
        <li>
          <Link href="/entrar">2. Página de Entrar (/entrar)Clique aqui para acessar</Link>
        </li>
        <br>
        </br>
        <li>
          <Link href="/exemplos/avancado">3. Exemplo Avançado (/exemplos/avancado)Clique aqui para acessar</Link>
        </li>
      </ul>
    </main>
  )
}