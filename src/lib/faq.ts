import { SITE } from './site';

export type FaqItem = {
  question: string;
  answer: string;
};

/** Shared FAQ — used on homepage and every tool page (BuyAhref branded). */
export const SITE_FAQ: FaqItem[] = [
  {
    question: 'Do you offer refunds?',
    answer: `BuyAhref may initiate a refund when a primary tool does not work for three or more consecutive days, or when access is not delivered after a successful payment. Change of mind after access is granted usually does not qualify. See our refund policy or email ${SITE.email} for help.`,
  },
  {
    question: 'How do I get access to group buy SEO tools?',
    answer:
      'Sign up on BuyAhref, choose a plan, then continue to ToolsMandi to complete payment. After checkout you get dashboard access to Ahrefs and the other tools included in your membership. Live support is available if you need a walkthrough.',
  },
  {
    question: 'Can I share my account or use a Proxy/VPN?',
    answer:
      'No. Do not share your BuyAhref / ToolsMandi account or access tools through proxies, VPNs, or RDPs. Account sharing or unauthorized access methods can lead to a permanent ban.',
  },
  {
    question: 'What group buy SEO tools are available?',
    answer:
      'BuyAhref offers 50+ premium tools including Ahrefs, Semrush, Moz Pro, Envato Elements, Canva, Jasper, Grammarly, ChatGPT Plus, and many more — at a fraction of individual subscription costs. Browse the full directory on our Tools page.',
  },
  {
    question: 'How reliable is BuyAhref group buy access?',
    answer:
      'We aim for high uptime with monitoring across the ToolsMandi dashboard. If a primary tool stays down for more than three consecutive days, our refund policy may apply. Contact support with your order email if something looks wrong.',
  },
];

export function faqJsonLd(items: FaqItem[] = SITE_FAQ) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function toolFaq(toolName: string): FaqItem[] {
  return [
    {
      question: `How do I buy ${toolName} group buy on BuyAhref?`,
      answer: `Open the Sign Up page on BuyAhref, pick a plan that includes ${toolName}, complete checkout on ToolsMandi, then open ${toolName} from your member dashboard. Already a member? Use Login to access it instantly.`,
    },
    ...SITE_FAQ,
  ];
}
