import toolsJson from '../data/sgbuy-tools.json';
import { SITE } from './site';

export type ToolCategory = 'seo' | 'writing' | 'creative' | 'amazon' | 'learning' | 'streaming' | 'other';

export type ToolSection = {
  heading: string;
  paragraphs: string[];
};

export type Tool = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  sections: ToolSection[];
  category: ToolCategory;
  status: 'pending' | 'done';
  priority: number;
  domain?: string;
  image?: string;
  thumbnail?: string;
  thumbnailMobile?: string;
  imageAlt?: string;
  keywords?: string;
};

export function toolThumb(tool: Tool): string | undefined {
  return tool.thumbnail || tool.image;
}

export function toolThumbMobile(tool: Tool): string | undefined {
  return tool.thumbnailMobile || tool.thumbnail || tool.image;
}

export function toolAlt(tool: Tool): string {
  return tool.imageAlt || `${tool.name} Group Buy — BuyAhref.com`;
}

export const TOOLS = (toolsJson as Tool[]).map((tool) => ({
  ...tool,
  status: 'done' as const,
}));

export const TOOL_BY_SLUG = Object.fromEntries(TOOLS.map((t) => [t.slug, t])) as Record<string, Tool>;

export const TOOL_SLUGS = TOOLS.map((t) => t.slug);

export function getTool(slug: string): Tool | undefined {
  return TOOL_BY_SLUG[slug];
}

/** Stable related set: same category first, then priority SEO/creative fill — 8 links. */
export function getRelatedTools(slug: string, count = 8): Tool[] {
  const current = TOOL_BY_SLUG[slug];
  if (!current) return [];

  const others = TOOLS.filter((t) => t.slug !== slug);
  const same = others.filter((t) => t.category === current.category);
  const rest = others.filter((t) => t.category !== current.category);

  // Rotate within category using slug hash so each page differs
  const rot = [...slug].reduce((n, ch) => n + ch.charCodeAt(0), 0);
  const rotate = <T,>(arr: T[]) => {
    if (!arr.length) return arr;
    const i = rot % arr.length;
    return [...arr.slice(i), ...arr.slice(0, i)];
  };

  const pool = [...rotate(same), ...rotate(rest)];
  return pool.slice(0, count);
}

export const TOOL_BUY_URL = SITE.signupUrl;
export const TOOL_SIGNUP_PATH = SITE.signupPage;
