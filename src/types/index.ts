export interface RecentChange {
  id: string;
  kind: Kind;
  timestamp: string;
  comment: null | string;
  changes: Change[];
  author: Author | null;
  ip: string | null;
  data: Data;
}

export interface Author {
  key: string;
}

export interface Change {
  key: string;
  revision: number;
}

export interface Data {
  url?: string;
  list?: Author;
  seeds?: string[];
  add?: Author[];
  remove?: Author[];
  master?: string;
  duplicates?: string[];
  mrid?: string;
}

export type Kind =
  | "edit-book"
  | "new-account"
  | "add-book"
  | "add-cover"
  | "lists"
  | "update"
  | "merge-works"
  | "merge-authors";
