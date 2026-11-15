// FAQs that are not on the homepage, by slug: Brazilian Portuguese, "você".
// Same shape as the English source, which stays the reference.
// Product terms: docs/20261113-1401-APP-TERMS.md.
export const faqsPtExtra: Record<string, { question: string; answer: string }> = {
  "orchestrate-multiple-profiles": {
    question: "A hubsell consegue orquestrar vários perfis de executivos ao mesmo tempo?",
    answer: "<p>Com a hubsell, você gerencia a prospecção do seu CEO, do seu VP de Vendas e dos seus especialistas a partir de um único painel, com uma abordagem coordenada, de igual para igual, em toda a conta-alvo.</p>",
  },
  "hubsell-email-infrastructure": {
    question: "A hubsell envia e-mails por servidores externos ou pelas nossas próprias caixas de e-mail?",
    answer: "<p>A infraestrutura da hubsell \"não aparece em nada\" no e-mail enviado. Não usamos servidores SMTP externos nem links de redirecionamento para rastreamento, que acionam filtros de spam. Os e-mails são enviados por integração direta via API (Google/Microsoft), o que gera taxas de abertura bem mais altas.</p>",
  },
  "personalize-outreach-at-scale": {
    question: "Como personalizar a prospecção fria em escala sem parecer um robô de IA?",
    answer: "<p>Os compradores reconhecem na hora um elogio escrito por IA, e isso custa respostas. Uma mensagem simples e direta, enviada para uma lista muito relevante, por exemplo os participantes de um webinar específico ou as pessoas que interagiram com um post específico, sempre supera um texto personalizado por máquina e enviado para uma persona genérica. A hubsell cria essa relevância já na etapa dos dados: contatos buscados em tempo real e alinhados ao seu ICP, para que a mensagem possa ser curta e honesta.</p>",
  },
  "stop-sales-email-bounces": {
    question: "Como evitar que nossos e-mails de vendas sejam devolvidos por causa de dados ruins no CRM?",
    answer: "<p>Um tomador de decisão B2B fica em média cerca de 2,5 anos no cargo, ou seja, CRMs estáticos e listas compradas perdem de 25 a 30% de validade por ano. A hubsell resolve isso com o zero-day sourcing, o nosso método de dados em tempo real: buscamos e verificamos os dados de contato no exato momento do seu pedido, o que mantém a precisão alta e protege a reputação do seu remetente.</p>",
  },
  "hubsell-high-volume-sales": {
    question: "A hubsell serve para vendas transacionais de alto volume e ticket baixo?",
    answer: "<p>Sim. Embora a hubsell possa ser usada para prospecção em alto volume, recomendamos usá-la para prospecção muito bem segmentada.</p>",
  },
  "mass-email-brand-reputation": {
    question: "O envio em massa de e-mails frios está prejudicando a reputação da nossa marca e a entregabilidade?",
    answer: "<p>Com as regras mais recentes do Google e do Yahoo, táticas de disparo em massa sem critério destroem rapidamente a reputação de remetente do seu domínio. A hubsell a protege com segmentação precisa, envio nativo via API pelo Google e pela Microsoft e distribuindo a prospecção com segurança entre 5 a 10 perfis de remetentes internos. Menos volume por remetente, mais entregabilidade, nenhum domínio queimado.</p>",
  },
  "third-party-intent-data-accuracy": {
    question: "Os dados de intenção B2B de terceiros são realmente precisos?",
    answer: "<p>A maioria dos dados de intenção depende de algoritmos probabilísticos (que tentam adivinhar quem está comprando com base em tráfego anônimo na web). Como 95% dos compradores B2B não estão no mercado em um dado momento, aplicar um algoritmo genérico a um mercado que não está comprando faz a sua equipe de vendas correr atrás de fantasmas.</p>",
  },
  "sdr-vs-executive-linkedin-outreach": {
    question: "Quem deve fazer a prospecção no LinkedIn: nossos SDRs ou nossos executivos?",
    answer: "<p>Quem envia a mensagem muda o resultado. Quando um SDR envia uma solicitação de conexão, a taxa de aceite costuma ficar abaixo de 20%, porque o comprador já espera um pitch. Quando um fundador, executivo ou especialista envia exatamente a mesma solicitação, a taxa de aceite passa de 50%. A hubsell foi feita para fazer a prospecção a partir dos perfis que os compradores realmente aceitam.</p>",
  },
  "cold-email-reply-rates-dropping": {
    question: "Por que as taxas de resposta dos nossos e-mails frios caíram tanto de repente?",
    answer: "<p>A prospecção tradicional de disparo em massa está falhando por dois motivos estruturais. Primeiro, os novos limites rígidos de spam do Google e do Yahoo (taxa de reclamação de 0,3%) fazem com que envios em massa prejudiquem ativamente a reputação do seu domínio. Segundo, os compradores reconhecem na hora a personalização automática feita por IA. Parece pessoal, mas soa vazia, e o comprador se fecha.</p>",
  },
  "sdr-first-meetings-week-one": {
    question: "Um SDR novo consegue mesmo marcar reuniões na primeira semana?",
    answer: "<p>Sim, quando três condições são atendidas: a oferta combina com o mercado que você busca, a segmentação está certa (os cargos certos nas organizações certas) e a execução não trava (segmentação definida e textos aprovados nos primeiros dias). A hubsell elimina os obstáculos de sempre no início, como montar listas, configurar ferramentas e limpar dados, para que a primeira semana seja dedicada à prospecção e não à parte administrativa.</p>",
  },
  "hubsell-setup-before-first-sdr": {
    question: "Estamos contratando nosso primeiro SDR. Quando devemos configurar a hubsell?",
    answer: "<p>Antes do primeiro dia, para que a primeira semana seja dedicada a vender e não a configurar ferramentas. A segmentação e o primeiro Flow podem estar prontos quando o SDR chegar e, como os contatos são buscados em tempo real, nada fica desatualizado enquanto você contrata.</p>",
  },
};
