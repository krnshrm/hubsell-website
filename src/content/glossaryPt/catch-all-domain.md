---
term: "Domínio catch-all"
category: "Dados e enriquecimento"
definition: "Um domínio catch-all (catch-all domain) é um domínio de e-mail configurado para aceitar mensagens para qualquer endereço, o que dificulta saber se uma caixa de e-mail específica existe de fato."
related:
  - email-deliverability
  - verified-at-source-data
  - email-verification
  - bounce-rate
updated: "julho de 2026"
---

## Por que isso importa

Os domínios catch-all quebram a verificação de e-mail normal. Uma verificação padrão pergunta ao servidor de e-mail se um endereço existe, mas um servidor catch-all responde sim para tudo, então a verificação não consegue confirmar que a caixa de e-mail é real. Se você enviar mesmo assim, a mensagem pode ser rejeitada depois ou não chegar a lugar nenhum, o que aumenta discretamente a sua taxa de rejeição e prejudica a entregabilidade.

## Como funciona na prática

Em um domínio normal, o servidor de destino recusa mensagens para um endereço que não existe, o que permite a um verificador confirmar a caixa de e-mail. Um domínio catch-all é configurado para aceitar todas as mensagens e classificá-las ou descartá-las depois, então o servidor aceita qualquer endereço no momento da verificação. Os verificadores só podem marcar esses endereços como arriscados, não como válidos, por isso eles exigem um tratamento extra.

## Erros comuns

O erro é tratar endereços catch-all como verificados e enviar para eles em grande volume. Eles passam por uma verificação simples, mas uma parte deles não corresponde a caixas de e-mail reais, então as mensagens são rejeitadas ou desaparecem. Ignorar o alerta de catch-all é uma das formas mais rápidas de aumentar a taxa de rejeição de uma lista que, fora isso, está limpa.

## Como a hubsell aborda isso

A hubsell sinaliza os domínios catch-all durante a verificação no momento do uso, para que esses endereços arriscados sejam identificados antes de um crédito ser gasto, e não depois de uma rejeição.
