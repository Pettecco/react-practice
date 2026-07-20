import { useState, useEffect } from "react";
import { fetchTopStories, fetchStory } from "../services/api";
import type { HackerNewsArticle } from "../types";

export function useHackerNews() {
  const [articles, setArticles] = useState<HackerNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const topIds = await fetchTopStories();
        const top10Ids = topIds.slice(0, 10);

        const stories = await Promise.all(
          top10Ids.map((id) => fetchStory(id))
        );

        const sorted = stories.sort((a, b) => b.score - a.score);
        setArticles(sorted);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch"));
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return { articles, loading, error };
}
