export interface Snippet {
  snippetId: string;
  snippet: string;
}

export interface SnippetGet {
  message: string;
  content: Snippet;
}

export interface SnippetPost {
  message: string;
  snippetId: string;
}
