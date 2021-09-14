import { Hero, LinkButton } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout title="Bookerly | Your one stop shop for funding, booking and managing your next party">
      <Hero
        imgUrl="/images/hubert.jpg"
        title="BOOKERLY"
        subTitle="Find, book and manage your next party all in one place."
      />
      <div className="container p-5 lg:px-0 max-w-xl">
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-none md:flex md:space-x-3 mt-4">
          <LinkButton className="flex-1" href="/events" linkText="Events" />
          <LinkButton
            className="flex-1"
            href="/bookings"
            linkText="Manage A Booking"
          />
          <LinkButton
            className="flex-1"
            href="/venues"
            linkText="Find A Venue"
          />
          <LinkButton
            className="flex-1"
            href="/venues/add"
            linkText="Add Your Venue"
          />
          <LinkButton
            className="flex-1"
            href="/venues/specials"
            linkText="Specials"
          />
          <LinkButton className="flex-1" href="/about" linkText="About Us" />
        </div>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}
