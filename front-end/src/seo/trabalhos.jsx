import React from 'react'
import {Helmet} from "react-helmet"
// import metaImagem from "../uploads/imagens/foto-perfil.webp"
import { fotoDePerfil } from "../asset-pack.json"
const metaImagem = fotoDePerfil.png

export default function TrabalhosSEO() {
  return (
    <Helmet>
      {/* SEO Geral */}
      <title>Trabalhos | Desenvolvedor Diego Matos</title>
      <meta name="description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos."/>
      <link rel="canonical" href="https://devdiegomatos.com.br/trabalhos"/>
      <meta name="author" content="Diego Matos"/>
      <meta name="robots" content="index,follow"/>

      {/* Google+ / Schema.org */}
      <meta itemprop="name" content="Trabalhos | Desenvolvedor Diego Matos"/>
      <meta itemprop="description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos."/>
      <meta itemprop="image" content={metaImagem}/>
      {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

      {/* Open Graph Facebook */}
      <meta property="og:title" content="Trabalhos | Desenvolvedor Diego Matos"/>
      <meta property="og:description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos."/>
      <meta property="og:url" content="https://devdiegomatos.com.br/trabalhos"/>
      <meta property="og:site_name" content="Portfolio do desenvolvedor Diego Matos"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={metaImagem}/>
      <meta property="og:image:alt" content="Foto do Desenvolvedor Diego Matos"/>
      <meta property="og:locale" content="pt-BR"/>

      {/* Twitter */}
      <meta name="twitter:title" content="Trabalhos | Desenvolvedor Diego Matos"/>
      <meta name="twitter:description" content="Página de visualização de todos os trabalhos do desenvolvedor Diego Matos."/>
      <meta name="twitter:url" content="https://devdiegomatos.com.br/trabalhos"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:image" content={metaImagem}/>
      {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
      {/* <meta name="twitter:site" content="@empresa"/> */}
    </Helmet>
  )
}