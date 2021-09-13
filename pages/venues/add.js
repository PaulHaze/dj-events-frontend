import Link from 'next/link';
import { Hero } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function AddEventPage() {
  return (
    <MainLayout title="Add Your Venue">
      <Hero imgUrl="/images/basement.jpg" title="ADD VENUE" />
      <div className="container p-5 max-w-xl">
        <p>Enter your venue details below</p>
        <div className="flex space-x-3">
          <Link href="/venues">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Save Venue
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
