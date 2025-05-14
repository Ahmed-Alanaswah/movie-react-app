import { ErrorBoundary } from "react-error-boundary";

export function ErrorFallback({ error }) {
  console.error(error);
  return <p style={{ color: "red" }}>Error: {error.message}</p>;
}

export { ErrorBoundary };
