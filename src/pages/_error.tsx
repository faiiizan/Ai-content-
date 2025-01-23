// frontend/src/pages/_error.tsx
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 text-center">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold text-red-600">
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
        </h1>
        <p className="mt-4">Please try again later.</p>
      </div>
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 500;
  return { statusCode };
};

export default ErrorPage;
