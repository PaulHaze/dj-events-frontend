import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="DJ Events">
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">DJ Events Listings</h1>
        <p>
          Your one stop shop for all the latest night lub events and parties
        </p>
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
          <Link href="/events/add">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Add An Event
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}
