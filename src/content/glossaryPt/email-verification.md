---
term: "Verificação de e-mail"
category: "Dados e enriquecimento"
definition: "A verificação de e-mail (email verification) é o processo de checar se um endereço de e-mail é válido e pode receber mensagens antes de você enviar algo para ele."
related:
  - catch-all-domain
  - email-deliverability
  - bounce-rate
  - verified-at-source-data
updated: "julho de 2026"
---

## Por que isso importa

Enviar para endereços inválidos gera rejeições, e uma taxa de rejeição alta prejudica a sua reputação de remetente, o que depois atrapalha também a entrega para endereços bons. A verificação protege essa reputação ao filtrar antes os endereços ruins. É uma das formas mais baratas de manter um programa de outbound saudável, e o custo dela é muito menor do que o estrago que um pico de rejeições causa.

## Como funciona na prática

A verificação checa um endereço em etapas: o formato é válido, o domínio existe e aceita e-mails, e a caixa de e-mail específica responde. Os domínios catch-all, que aceitam mensagens para qualquer endereço, são marcados como arriscados porque a caixa de e-mail não pode ser confirmada. A verificação roda em lote em uma lista ou em tempo real, à medida que cada endereço é adicionado.

## Erros comuns

Um erro frequente é verificar uma vez na importação e nunca mais, já que os endereços se deterioram com o tempo. Outro é enviar para endereços catch-all como se estivessem confirmados. Um terceiro é pular a verificação em listas pequenas, em que algumas rejeições ainda empurram a reputação na direção errada.

## Como a hubsell aborda isso

A hubsell verifica cada contato no momento do uso, incluindo uma checagem de catch-all, para que um crédito só seja gasto com um endereço que realmente pode receber e-mails hoje.
