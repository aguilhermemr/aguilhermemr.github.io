# aguilhermemr.github.io

Portfólio profissional de **Angel Guillermo Morales Romero** — Especialista em IA | Gestão de negócios e tecnologia.

🔗 **https://aguilhermemr.github.io** · [English](https://aguilhermemr.github.io/en/) · [Español](https://aguilhermemr.github.io/es/)

Site estático feito com [Jekyll](https://jekyllrb.com/) e publicado pelo GitHub Pages a partir da branch `main`. Trilíngue (português, inglês e espanhol), com modo claro/escuro, layout responsivo e SEO.

## Seções

Sobre mim · Trajetória · Habilidades (com filtros por tema) · Cursos e certificações (com verificação no Credly) · Projetos · Artigos · Biblioteca de PDFs · Contato · Download do currículo em PT, EN e ES.

As seções **Artigos** e **Biblioteca** só aparecem (no menu e na página) quando há conteúdo no idioma da página.

## Estrutura

```
_config.yml          configuração do site e da coleção de artigos
_data/
  pt.yml en.yml es.yml   todos os textos de cada idioma (inclui a lista de projetos)
  badges.yml             insígnias do Credly
  biblioteca.yml         lista de PDFs da biblioteca
_layouts/
  home.html          página principal (usada por /, /en/ e /es/)
  article.html       página de um artigo
_articles/           artigos em Markdown (a pasta é criada com o primeiro artigo)
assets/
  css/site.css  js/site.js  img/  cv/  biblioteca/
index.html  en/index.html  es/index.html
about-me.html        redireciona para /es/ (endereço antigo)
```

## Como adicionar conteúdo

**Projeto** — em `_data/pt.yml`, `en.yml` e `es.yml`, adicione um item em `projects:`:

```yaml
  - tag: IA · Visão computacional
    title: Nome do projeto
    desc: "Uma ou duas frases sobre o problema e o resultado."
    repo: https://github.com/aguilhermemr/nome-do-repositorio
```

**Artigo** — crie `_articles/nome-do-artigo.md` (o nome vira o endereço `/artigos/nome-do-artigo/`):

```markdown
---
title: "Título do artigo"
date: 2026-11-05
lang: pt
summary: "Resumo de uma frase para o cartão e para o Google."
---

Texto do artigo em Markdown.
```

Para publicar o mesmo artigo em outro idioma, crie outro arquivo com `lang: en` ou `lang: es`.

**PDF da biblioteca** — coloque o arquivo em `assets/biblioteca/` e adicione um item em `_data/biblioteca.yml` (`lang: all` mostra o PDF nos três idiomas):

```yaml
- title: "Título do documento"
  file: nome-do-arquivo.pdf
  desc: "Descrição curta."
  lang: pt
```

## Contato

[LinkedIn](https://www.linkedin.com/in/angel-guillermo-morales-romero) · [GitHub](https://github.com/aguilhermemr) · aguilhermemr@gmail.com
