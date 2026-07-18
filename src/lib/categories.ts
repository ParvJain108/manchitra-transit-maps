export const CATEGORIES = {
  transit: { label: 'Transit Maps', code: 'T', color: 'var(--line-transit)', badgeClass: 'badge-transit' },
  infra: { label: 'Infra Updates', code: 'I', color: 'var(--line-infra)', badgeClass: 'badge-infra' },
  charts: { label: 'Charts', code: 'C', color: 'var(--line-charts)', badgeClass: 'badge-charts' },
  family: { label: 'Family Trees', code: 'F', color: 'var(--line-family)', badgeClass: 'badge-family' },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
