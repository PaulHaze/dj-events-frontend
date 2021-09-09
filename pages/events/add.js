import Link from 'next/link';
import MainLayout from '../../layouts/MainLayout';

export default function AddEventPage() {
  return (
    <MainLayout title="Add Your Event">
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">Add Event</h1>
        <p>Enter your event details below</p>
        <div className="flex space-x-3">
          <Link href="/">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Home
            </button>
          </Link>
          <Link href="/events">
            <button
              type="button"
              className="border rounded shadow px-4 py-2 mt-10"
            >
              Save Event
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
