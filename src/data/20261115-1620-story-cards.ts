// Customer-story cards on the platform and solutions pages for fr, es and pt.
// de and nl read their translated customer-story collections; fr, es and pt have
// no translated stories yet (HUB-609), so the card's title and description come
// from here and the result labels from the homepage testimonials of the same
// story (home.<locale>.ts). Remove this file once customerstoriesFr/Es/Pt exist.
import { homeFr } from './20261114-1030-home.fr';
import { homeEs } from './20261114-1030-home.es';
import { homePt } from './20261114-1030-home.pt';

type Card = { title: string; description: string };

const cards: Record<string, Record<string, Card>> = {
  fr: {
    elium: {
      title: 'Comment Elium a augmenté ses leads de 25 %',
      description: 'Elium a augmenté ses leads de 25 %, gagné en moyenne 20 heures par semaine et atteint un taux d\'ouverture supérieur à 53 % sur ses campagnes.',
    },
    safran: {
      title: 'Comment Safran Software a réduit son CAC de 30 %',
      description: 'Safran Software a réduit son CAC de 30 % et gagné 25 heures par semaine avec hubsell, en ciblant plus de 1 000 comptes et en faisant mieux connaître sa marque.',
    },
    sensolus: {
      title: 'Comment Sensolus a obtenu 22 % de réponses et réduit son CAC de 30 %',
      description: 'Sensolus réduit de 30 % son coût d\'acquisition client et obtient un taux de réponse de 22 % auprès de son ICP.',
    },
    staffbase: {
      title: 'Comment Staffbase a ciblé et conquis 15 nouveaux marchés',
      description: 'Staffbase a atteint un taux de réponse de 15,6 % et un taux d\'engagement de 3,5 % en ciblant 15 marchés différents.',
    },
    verhaert: {
      title: 'Comment Verhaert a triplé ses opportunités',
      description: 'Verhaert a triplé la création d\'opportunités grâce à un taux d\'ouverture de plus de 60 % et à des messages personnalisés jusqu\'à 90 %.',
    },
    workspace365: {
      title: 'Comment Workspace 365 a créé plus de 100 opportunités',
      description: 'Workspace 365 a créé plus de 100 opportunités et réduit son CAC de 33 % en automatisant les tâches répétitives et en maîtrisant la délivrabilité de ses e-mails.',
    },
  },
  es: {
    elium: {
      title: 'Cómo Elium aumentó sus leads un 25 %',
      description: 'Elium aumentó sus leads un 25 %, ahorró de media 20 horas a la semana y superó el 53 % de tasa de apertura en sus campañas.',
    },
    safran: {
      title: 'Cómo Safran Software redujo su CAC un 30 %',
      description: 'Safran Software redujo su CAC un 30 % y ahorró 25 horas a la semana con hubsell, llegando a más de 1.000 cuentas y dando a conocer su marca.',
    },
    sensolus: {
      title: 'Cómo Sensolus logró un 22 % de respuestas y redujo su CAC un 30 %',
      description: 'Sensolus reduce un 30 % su coste de adquisición de clientes y logra una tasa de respuesta del 22 % en su ICP.',
    },
    staffbase: {
      title: 'Cómo Staffbase llegó a 15 nuevos mercados',
      description: 'Staffbase logró una tasa de respuesta del 15,6 % y una tasa de interacción del 3,5 % dirigiéndose a 15 mercados distintos.',
    },
    verhaert: {
      title: 'Cómo Verhaert triplicó sus oportunidades',
      description: 'Verhaert triplicó la generación de oportunidades con una tasa de apertura de más del 60 % y mensajes personalizados hasta en un 90 %.',
    },
    workspace365: {
      title: 'Cómo Workspace 365 generó más de 100 oportunidades',
      description: 'Workspace 365 generó más de 100 oportunidades y redujo su CAC un 33 % automatizando tareas repetitivas y dominando la entregabilidad de sus emails.',
    },
  },
  pt: {
    elium: {
      title: 'Como a Elium aumentou seus leads em 25%',
      description: 'A Elium aumentou seus leads em 25%, economizou em média 20 horas por semana e passou de 53% de taxa de abertura nas campanhas.',
    },
    safran: {
      title: 'Como a Safran Software reduziu seu CAC em 30%',
      description: 'A Safran Software reduziu seu CAC em 30% e economizou 25 horas por semana com a hubsell, alcançando mais de 1.000 contas e fortalecendo sua marca.',
    },
    sensolus: {
      title: 'Como a Sensolus chegou a 22% de respostas e reduziu o CAC em 30%',
      description: 'A Sensolus reduz em 30% o custo de aquisição de clientes e alcança uma taxa de resposta de 22% no seu ICP.',
    },
    staffbase: {
      title: 'Como a Staffbase entrou em 15 novos mercados',
      description: 'A Staffbase alcançou uma taxa de resposta de 15,6% e uma taxa de engajamento de 3,5% atuando em 15 mercados diferentes.',
    },
    verhaert: {
      title: 'Como a Verhaert triplicou suas oportunidades',
      description: 'A Verhaert triplicou a geração de oportunidades com uma taxa de abertura acima de 60% e mensagens personalizadas em até 90%.',
    },
    workspace365: {
      title: 'Como a Workspace 365 gerou mais de 100 oportunidades',
      description: 'A Workspace 365 gerou mais de 100 oportunidades e reduziu o CAC em 33% automatizando tarefas repetitivas e dominando a entregabilidade dos seus e-mails.',
    },
  },
};

const homes: Record<string, { testimonials: { slug: string; results: { metric: string; label: string }[] }[] }> = {
  fr: homeFr, es: homeEs, pt: homePt,
};

/** Title, description and result labels for a story card, or null for en/de/nl. */
export function storyCard(L: string, slug: string) {
  const card = cards[L]?.[slug];
  if (!card) return null;
  const results = homes[L]?.testimonials.find((t) => t.slug === slug)?.results ?? [];
  return { ...card, results };
}
