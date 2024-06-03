import type { Snippet, SnippetGet, SnippetPost } from "@/types";

import { baseAxios } from "@/utils";

class SnippetService {
  public async findSnippet(snippetId: string): Promise<Snippet | null> {
    return baseAxios
      .get<SnippetGet>(`snippet/${snippetId}`)
      .then((res) => res.data.content)
      .catch(() => null);
  }

  public async saveSnippet(snippet: string): Promise<string | null> {
    return baseAxios
      .post<SnippetPost>("snippet", { snippet })
      .then((res) => res.data.snippetId)
      .catch(() => null);
  }
}

export const snippetService = new SnippetService();
