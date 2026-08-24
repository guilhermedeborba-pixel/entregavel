"use client"
import PostCard from "../../componentes/PostCard"
import PersonalDataForm from "../../componentes/PersonalDataForm" 



export default function AvancadoPage() {
  return (

    
    <main style={{ padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
      <PostCard />
      <PersonalDataForm />
    </main>
  )
}