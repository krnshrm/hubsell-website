---
term: "Waterfall enrichment"
category: "Dados e enriquecimento"
definition: "O waterfall enrichment (enriquecimento em cascata) consulta vários fornecedores de dados, um após o outro, e fica com o primeiro resultado válido para cada campo, para conseguir mais correspondências do que com uma única fonte."
related:
  - data-enrichment
  - data-provider
  - b2b-data
  - email-verification
updated: "julho de 2026"
---

## Por que isso importa

Nenhum fornecedor tem todos os registros, e a cobertura varia por região e por cargo. Consultar os fornecedores um após o outro preenche mais campos do que qualquer fonte isolada, o que aumenta a taxa de correspondência e reduz as lacunas que os vendedores encontram. Para equipes que precisam de alta cobertura, a cascata é a forma de consegui-la sem apostar em um único fornecedor.

## Como funciona na prática

Uma cascata passa um registro pelos fornecedores em uma ordem definida. Para cada campo que falta, ela consulta o primeiro fornecedor e, se a resposta vier vazia ou com baixa confiança, consulta o seguinte, parando na primeira resposta boa. Isso se repete para cada campo, então um mesmo contato pode receber o e-mail de uma fonte e o telefone de outra. O custo é controlado colocando primeiro os fornecedores mais baratos ou com mais acertos.

## Erros comuns

Um erro comum é rodar uma cascata sem verificar o resultado escolhido, de modo que você aceita a primeira resposta mesmo que ela esteja errada. Outro é uma ordem ruim de fornecedores, que gasta com fontes caras antes que as mais baratas tenham a chance de responder. Um terceiro é buscar tanta cobertura que a precisão cai.

## Como a hubsell aborda isso

A hubsell se concentra em verificar cada contato no momento do uso, para que o resultado que você recebe seja conferido quando você precisa dele, e não aceito como a primeira resposta disponível de uma cadeia de bases de dados.
