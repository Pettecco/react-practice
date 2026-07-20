import type { HackerNewsArticle } from "../types";

interface ArticleItemProps {
  article: HackerNewsArticle;
}

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li className="article-item">
      <span className="article-score">{article.score} pts</span>
      <a
        className="article-title"
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {article.title}
      </a>
      <span className="article-author">by {article.by}</span>
    </li>
  );
}
