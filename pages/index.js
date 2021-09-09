import Link from 'next/link';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Bookerly | Your one stop shop for funding, booking and managing your next party">
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">Bookerly</h1>
        <p>Find, book and manage your next party all in one place.</p>
        <div className="grid grid-cols-2 gap-4 sm:gap-0 sm:grid-cols-none sm:flex sm:space-x-3 mt-4">
          <Link href="/venues">
            <button type="button" className="btn">
              Find A Venue
            </button>
          </Link>
          <Link href="/bookings">
            <button type="button" className="btn">
              Manage A Booking
            </button>
          </Link>
          <Link href="/venues/add">
            <button type="button" className="btn">
              Add Your Venue
            </button>
          </Link>
          <Link href="/venues/specials">
            <button type="button" className="btn">
              Specials
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
