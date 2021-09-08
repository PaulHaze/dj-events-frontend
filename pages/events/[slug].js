import Link from 'next/link';

import { useRouter } from 'next/router';
import MainLayout from '../../layouts/MainLayout';

export default function EventPage() {
  const router = useRouter();
  console.log(router.query.slug);
  return (
    <MainLayout>
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">Event Details</h1>
        <p>Some blurb about the event</p>
        <div className="flex space-x-3">
          <Link href="/">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Home
            </button>
          </Link>
          <Link href="/about">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              About
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
