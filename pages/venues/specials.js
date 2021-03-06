import Link from 'next/link';
import { Hero } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function SpecialsPage() {
  return (
    <MainLayout title="Bookerly | Bookings">
      <Hero imgUrl="/images/special.jpg" title="SPECIALS" />
      <div className="container p-5 max-w-xl">
        <p>Here you can see all the special offers currently available.</p>

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
