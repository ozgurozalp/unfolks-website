export type ComparisonValue = boolean | "partial" | string | { value: boolean | "partial" | string; note?: string };

export type ComparisonColumn = {
  id: string;
  name: string;
  /** A short line under the name, such as a price. */
  caption?: string;
  /** Your product. It gets the tinted band and stays visible on phones. */
  highlight?: boolean;
};

export type ComparisonRow = {
  id: string;
  feature: string;
  /** Secondary text under the feature name. */
  hint?: string;
  values: Record<string, ComparisonValue>;
};

export type ComparisonSection = { id: string; title: string; rows: ComparisonRow[] };
