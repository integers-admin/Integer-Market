import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="text-center">
        <span className="rounded-full border border-[#ea9d87] bg-[#fff5f2] px-4 py-2 text-sm text-[#e27c60]">
          Error 404
        </span>

        <h1 className="mt-6 text-8xl font-extrabold text-[#e27c60] md:text-[10rem]">
          404
        </h1>

        <h2 className="text-3xl font-bold text-[#060c17] md:text-4xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-600">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-[#e27c60] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#c96540]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}