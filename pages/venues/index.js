import Link from 'next/link';
import { Hero } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function VenuesPage() {
  return (
    <MainLayout>
      <Hero imgUrl="/images/basement.jpg" title="VENUES" />
      <div className="container p-5 max-w-xl">
        <p>
          Whether you are looking for an intimate space for a small gathering or
          a large scale space for a big bonanza, you will find it here.
        </p>
        <div className="flex space-x-3">
          <Link href="/venues/add">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Add Your Venue
            </button>
          </Link>
          <Link href="/">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Home
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
