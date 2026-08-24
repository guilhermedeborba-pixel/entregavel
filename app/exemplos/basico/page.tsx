"use client"
import Button from "../../button"
import Input from "../../componentes/Input" 
import TitleDescriptionInfo from "../../componentes/TitleDescriptionInfo"


export default function BasicoPage() {
  return (
    <main style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 400 }}>
      <TitleDescriptionInfo 
        title="Exemplo Básico" 
        description="Demonstração dos componentes básicos solicitados." 
      />
      <Input placeholder="Digite seu texto aqui..." />
      <Button>Clique Aqui</Button>
    </main>
  )
}