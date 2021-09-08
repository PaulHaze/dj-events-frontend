import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-[100vh] bg-gradient-to-br from-green-300/50 to-sky-800/50 flex items-start justify-center pt-5 px-3">
        <div className="bg-white p-xl rounded-lg shadow-2xl text-center">
          <h1 className="bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800 text-transparent  text-center">
            New Tailwind Project
          </h1>
          <div className="flex space-x-3">
            <Link href="/about">
              <button
                type="button"
                className="border rounded shadow px-4 py-2 mt-10"
              >
                About
              </button>
            </Link>
            <Link href="/events">
              <button
                type="button"
                className="border rounded shadow px-4 py-2 mt-10"
              >
                Events
              </button>
            </Link>
            <Link href="/events/event-1">
              <button
                type="button"
                className="border rounded shadow px-4 py-2 mt-10"
              >
                Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
