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

// Search Books
export interface SearchBooks {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: null;
  docs: Doc[];
}

export interface Doc {
  author_key?: string[];
  author_name?: string[];
  cover_edition_key?: string;
  cover_i?: number;
  ebook_access: EbookAccess;
  edition_count: number;
  first_publish_year?: number;
  has_fulltext: boolean;
  ia?: string[];
  ia_collection?: string[];
  key: string;
  language?: string[];
  lending_edition_s?: string;
  lending_identifier_s?: string;
  public_scan_b: boolean;
  title: string;
  subtitle?: string;
  id_standard_ebooks?: string[];
  id_librivox?: string[];
  id_project_gutenberg?: string[];
}

export type EbookAccess =
  | "borrowable"
  | "no_ebook"
  | "printdisabled"
  | "public";

//Book
export interface Book {
  title: string;
  authors: Type[];
  publish_date: string;
  publishers: string[];
  languages: Type[];
  publish_country: string;
  by_statement: string;
  type: Type;
  source_records: string[];
  key: string;
  works: Type[];
  identifiers: unknown;
  covers: number[];
  isbn_10: string[];
  series: string[];
  description: Created;
  physical_format: string;
  number_of_pages: number;
  latest_revision: number;
  revision: number;
  created: Created;
  last_modified: Created;
}

export interface Type {
  key: string;
}

export interface Created {
  type: string;
  value: string;
}

export interface Link {
  title: string
  url: string
  type: Type
}

export interface Excerpt {
  excerpt: string
  author: Author
  comment: string
}

export interface BookDetails {
  description: Created
  links: Link[]
  title: string
  covers: number[]
  subject_places: string[]
  subjects: string[]
  subject_people: string[]
  key: string
  authors: Author[]
  subject_times: string[]
  type: Type;
  excerpts: Excerpt[]
  latest_revision: number
  revision: number
  created: Created
  last_modified: Created
}
