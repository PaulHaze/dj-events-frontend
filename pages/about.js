import Link from 'next/link';

import MainLayout from '@/layouts/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout title="About DJ Events">
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">About</h1>
        <p>Find The Latest Dj Events Near You</p>

        <Link href="/">
          <button
            type="button"
            className="border rounded shadow px-4 py-2 mt-10"
          >
            Home
          </button>
        </Link>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}
