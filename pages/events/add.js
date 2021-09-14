import { LinkButton } from '@/components/index';
import MainLayout from '@/layouts/MainLayout';

export default function AddEventPage() {
  return (
    <MainLayout title="Add Your Event">
      <div className="container p-5 max-w-xl">
        <h1 className="font-heading">Add Event</h1>
        <p>Enter your event details below</p>
        <div className="mt-4">
          <LinkButton href="/events" linkText=" Save Event" />
        </div>
        <div className="mt-10">
          <p className="text-sm font-heading text-gray-400">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}
