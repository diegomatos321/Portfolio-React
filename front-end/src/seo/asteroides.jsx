import React from 'react'
import {Helmet} from "react-helmet"
import imagemMeta from "../uploads/imagens/asteroides.webp"

export default function FlappyBirdSEO() {
  return (
        <Helmet>
          {/* SEO Geral */}
          <title>Asteroides | Desenvolvedor Diego Matos</title>
          <meta name="description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <link rel="canonical" href="https://devdiegomatos.com.br/trabalhos/jogo-asteroides"/>
          <meta name="author" content="Diego Matos"/>
          <meta name="robots" content="index,follow"/>

          {/* Google+ / Schema.org */}
          <meta itemprop="name" content="Asteroides | Desenvolvedor Diego Matos"/>
          <meta itemprop="description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <meta itemprop="image" content={imagemMeta}/>
          {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

          {/* Open Graph Facebook */}
          <meta property="og:title" content="Asteroides | Desenvolvedor Diego Matos"/>
          <meta property="og:description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <meta property="og:url" content="https://devdiegomatos.com.br/trabalhos/jogo-asteroides"/>
          <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={imagemMeta}/>
          <meta property="og:image:alt" content="Foto do jogo Asteroides"/>
          <meta property="og:locale" content="pt-BR"/>

          {/* Twitter */}
          <meta name="twitter:title" content="Asteroides | Desenvolvedor Diego Matos"/>
          <meta name="twitter:description" content="Avalie um dos trabalhos feito por Diego Matos com os alunos, o desenvolvimento de um jogo baseado no clássico jogo Asteroides."/>
          <meta name="twitter:url" content="https://devdiegomatos.com.br/trabalhos/jogo-asteroides"/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:image" content={imagemMeta}/>
          {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
          {/* <meta name="twitter:site" content="@empresa"/> */}
    </Helmet>
  )
}