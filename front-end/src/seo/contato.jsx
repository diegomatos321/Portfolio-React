import React from "react";
import { Helmet } from "react-helmet";
import metaImagem from "../uploads/imagens/contato-banner.webp";

export default function ContatoSEO() {
  return (
    <Helmet>
      {/* SEO Geral */}
      <title>Contato | Desenvolvedor Diego Matos</title>
      <meta
        name="description"
        content="Página para entrar em contato com o desenvolvedor Diego Matos."
      />
      <link rel="canonical" href="https://devdiegomatos.com.br/contato" />
      <meta name="author" content="Diego Matos" />
      <meta name="robots" content="index,follow" />

      {/* Google+ / Schema.org */}
      <meta itemprop="name" content="Contato | Desenvolvedor Diego Matos" />
      <meta
        itemprop="description"
        content="Página para entrar em contato com o desenvolvedor Diego Matos."
      />
      <meta itemprop="image" content={metaImagem} />
      {/* <link href="https://plus.google.com/+SuaPagina" rel="publisher"/> */}

      {/* Open Graph Facebook */}
      <meta property="og:title" content="Contato | Desenvolvedor Diego Matos" />
      <meta
        property="og:description"
        content="Página para entrar em contato com o desenvolvedor Diego Matos."
      />
      <meta property="og:url" content="https://devdiegomatos.com.br/contato" />
      <meta
        property="og:site_name"
        content="Portfolio do desenvolvedor Diego Matos"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImagem} />
      <meta
        property="og:image:alt"
        content="Foto do Desenvolvedor Diego Matos"
      />
      <meta property="og:locale" content="pt-BR" />

      {/* Twitter */}
      <meta name="twitter:title" content="Contato | Desenvolvedor Diego Matos" />
      <meta
        name="twitter:description"
        content="Página para entrar em contato com o desenvolvedor Diego Matos."
      />
      <meta name="twitter:url" content="https://devdiegomatos.com.br/contato" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={metaImagem} />
      {/* <meta name="twitter:creator" content="@estevanmaito"/> */}
      {/* <meta name="twitter:site" content="@empresa"/> */}

      <meta name="ICBM" content="-22.801989, -43.208225" />
      <meta name="geo.position" content="-22.801989, -43.208225" />
      <meta name="geo.region" content="country[-state]" />
      <meta name="geo.placename" content="Ilha do Governador - Rio de Janeiro" />

      <link rel="me" href="https://devdiegomatos.com.br" type="text/html"/>
      <link rel="me" href="mailto:diegomatos@devdiegomatos.com.br"/>
      <link rel="me" href="sms:+5521995121978"/>
    </Helmet>
  );
}
