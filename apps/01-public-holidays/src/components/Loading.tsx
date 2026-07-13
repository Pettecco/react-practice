interface LoadingProps {
  message?: string;
}

export const Loading = ({ message = 'Loading...' }: LoadingProps) => {
  return <div className="alert alert-warning">{message}</div>;
};
