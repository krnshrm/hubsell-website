---
term: "DMARC"
category: "Entregabilidade"
definition: "DMARC é uma política de autenticação de e-mail que diz aos servidores de destino o que fazer quando uma mensagem falha no SPF e no DKIM, e informa quem está enviando em nome do seu domínio."
related:
  - spf
  - dkim
  - email-deliverability
  - sender-reputation
updated: "julho de 2026"
---

## Por que isso importa

O DMARC une o SPF e o DKIM e dá a você controle e visibilidade. Ele diz aos provedores se devem aceitar, colocar em quarentena ou recusar as mensagens que falham nas verificações, o que protege o seu domínio contra falsificação e protege os destinatários contra fraudes enviadas em seu nome. Ele também se tornou quase obrigatório: os grandes provedores hoje esperam uma política DMARC de quem envia em grande volume.

## Como funciona na prática

O DMARC é um registro DNS que define uma política (none, quarantine ou reject) e um endereço para os relatórios. Quando uma mensagem falha no alinhamento tanto do SPF quanto do DKIM, o servidor de destino aplica a sua política. Os relatórios mostram quais servidores estão enviando em nome do seu domínio, para que você identifique abusos e confirme que as suas próprias ferramentas estão alinhadas antes de endurecer a política.

## Erros comuns

Um erro comum é ir direto para a política reject antes de confirmar que todos os seus remetentes legítimos passam nas verificações, o que bloqueia os seus próprios e-mails. O erro oposto é deixar a política em none para sempre, de modo que ela nunca protege nada de fato. Um terceiro é nunca ler os relatórios, que são justamente a razão da visibilidade.

## Como a hubsell aborda isso

A hubsell ajuda você a alinhar os seus envios com o DMARC e a passar com segurança do monitoramento para a aplicação da política, para que o seu domínio fique protegido sem bloquear a sua própria prospecção.
