import React from 'react'
import {Helmet} from "react-helmet"
import metaImagem from "../uploads/imagens/foto-perfil.webp"

export default function HomeSEO() {
  return (
    <Helmet>
      {/* SEO Geral */}
      <title>Diego Matos | Desenvolvedor Web</title>
      <meta name="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub."/>
      <link rel="canonical" href="https://devdiegomatos.com.br/"/>
      <meta name="author" content="Diego Matos"/>
      <meta name="robots" content="index"/>

      {/* Google+ / Schema.org */}
      <meta itemprop="name" content="Diego Matos | Desenvolvedor Web"/>
      <meta itemprop="description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub."/>
      <meta itemprop="image" content={metaImagem}/>
      {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

      {/* Open Graph Facebook */}
      <meta property="og:title" content="Diego Matos | Desenvolvedor Web"/>
      <meta property="og:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub."/>
      <meta property="og:url" content="https://devdiegomatos.com.br/"/>
      <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={metaImagem}/>
      <meta property="og:image:alt" content="Foto do Desenvolvedor Diego Matos"/>
      <meta property="og:locale" content="pt-BR"/>

      {/* Twitter */}
      <meta name="twitter:title" content="Diego Matos | Desenvolvedor Web"/>
      <meta name="twitter:description" content="Página principal do desenvolvedor Diego Matos, conheça um pouco sobre ele, entre em contato, baixe seu curriculum ou olhe o código desse site em sua página do GitHub."/>
      <meta name="twitter:url" content="https://devdiegomatos.com.br/"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:image" content={metaImagem}/>
      {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
      {/* <meta name="twitter:site" content="@empresa"/> */}
    </Helmet>
  )
}