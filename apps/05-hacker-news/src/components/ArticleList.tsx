import type { HackerNewsArticle } from "../types";
import { ArticleItem } from "./ArticleItem";

interface ArticleListProps {
  articles: HackerNewsArticle[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul className="article-list">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
