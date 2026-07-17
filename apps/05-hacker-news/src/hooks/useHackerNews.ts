import { useState } from 'react';
import type { HackerNewsArticle } from '../types';

export const useHackerNews = () => {
  const [articles, setArticles] = useState<HackerNewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
};
