---
term: "SPF"
category: "Entregabilidade"
definition: "O SPF (Sender Policy Framework) é um registro de autenticação de e-mail que lista quais servidores podem enviar e-mails em nome do seu domínio."
related:
  - dkim
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "julho de 2026"
---

## Por que isso importa

O SPF é uma das verificações que os provedores de e-mail fazem para decidir se uma mensagem realmente vem do seu domínio. Sem ele, os seus e-mails têm mais chance de ser tratados como suspeitos ou falsificados, o que prejudica a entregabilidade. É um requisito básico para qualquer equipe que faz outbound em volume, e a falta dele limita o quanto o resto da sua configuração pode ajudar.

## Como funciona na prática

O SPF é um registro DNS que indica os servidores e serviços autorizados a enviar e-mails em nome do seu domínio. Quando um servidor recebe uma mensagem, ele verifica se o servidor de envio aparece nessa lista. Uma aprovação favorece a entrega; uma falha é um sinal de que o e-mail pode ser falsificado. O SPF funciona junto com o DKIM e o DMARC, não sozinho.

## Erros comuns

Um erro comum é listar remetentes demais ou deixar serviços antigos no registro, o que enfraquece a verificação ou ultrapassa o limite de consultas. Outro é presumir que o SPF basta sozinho, quando os provedores esperam cada vez mais também o DKIM e o DMARC. Um terceiro é esquecer de atualizar o SPF ao adicionar uma nova ferramenta de envio.

## Como a hubsell aborda isso

A hubsell envia por uma infraestrutura autenticada e orienta você a configurar corretamente o SPF, o DKIM e o DMARC, para que a sua prospecção passe nas verificações que protegem a caixa de entrada.
