---
term: "DKIM"
category: "Entregabilidade"
definition: "DKIM, ou DomainKeys Identified Mail, é um método de autenticação de e-mail que adiciona uma assinatura criptográfica para comprovar que a mensagem não foi alterada no caminho."
related:
  - spf
  - dmarc
  - email-deliverability
  - sender-reputation
updated: "julho de 2026"
---

## Por que isso importa

O DKIM permite que o servidor de destino confirme que uma mensagem realmente veio do seu domínio e não foi adulterada no caminho. Essa prova aumenta a confiança e favorece a chegada à caixa de entrada. Junto com o SPF e o DMARC, ele faz parte do mínimo que os provedores de e-mail hoje esperam de qualquer remetente legítimo, e deixá-lo de lado prejudica a entregabilidade.

## Como funciona na prática

O DKIM anexa uma assinatura a cada mensagem, criada com uma chave privada mantida pelo remetente. A chave pública correspondente fica no seu DNS. O servidor de destino usa essa chave pública para verificar a assinatura, confirmando que a mensagem é autêntica e não foi alterada. Uma assinatura válida favorece a entrega; uma assinatura ausente ou quebrada é um sinal negativo.

## Erros comuns

Um erro comum é configurar o DKIM uma vez e nunca trocar as chaves nem corrigi-las depois de mudar de provedor, de modo que as assinaturas quebram sem ninguém perceber. Outro é ativá-lo em uma ferramenta de envio, mas não em outra. Um terceiro é tratar o DKIM como opcional, quando os provedores o exigem cada vez mais para uma boa chegada à caixa de entrada.

## Como a hubsell aborda isso

A hubsell assina os envios de outbound com DKIM por meio de uma infraestrutura autenticada e ajuda você a publicar os registros DNS corretos, para que as suas mensagens tragam a prova que os provedores procuram.
