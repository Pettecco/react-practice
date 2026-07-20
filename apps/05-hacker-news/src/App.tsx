import { ArticleList } from './components/ArticleList';
import { Loading } from './components/Loading';
import { useHackerNews } from './hooks/useHackerNews';

export const App = () => {
  const { articles, loading, error } = useHackerNews();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Top 10 Hacker News Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
};
