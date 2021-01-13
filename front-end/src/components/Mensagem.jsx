import React from 'react'

export default function Mensagem(props) {
  return (
    <div className={`mensagem ${props.tipo}`}>
        <p>{props.conteudo}</p>
    </div>
  )
}
