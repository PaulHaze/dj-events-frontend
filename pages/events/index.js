import { Hero, LinkButton } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function EventsPage() {
  return (
    <MainLayout title="DJ Events">
      <Hero
        imgUrl="/images/showcase.jpg"
        title="EVENTS"
        subTitle="Upcoming parties near you"
      />
      <div className="container p-5 max-w-xl">
        <div className="flex">
          <LinkButton href="/events/add" linkText="Add An Event" />
        </div>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}
