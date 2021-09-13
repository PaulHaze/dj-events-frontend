import Link from 'next/link';
import { Hero } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function BookingsPage() {
  return (
    <MainLayout title="Bookerly | Bookings">
      <Hero
        imgUrl="/images/booking.jpg"
        title="MANAGE BOOKING"
        subTitle="Find, book and manage your next party all in one place."
      />
      <div className="container p-5 max-w-xl">
        <p>Here you can manage, amend or make a new booking.</p>

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
