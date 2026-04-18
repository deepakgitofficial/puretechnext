import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 font-heading">
        404
      </h1>
      <p className="text-2xl font-bold text-foreground mb-2">
        Page Not Found
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
      >
        Go Back Home
      </Link>
    </div>
  );
}
