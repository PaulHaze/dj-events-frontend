import { EventsCard } from './EventsCard';

export function EventsList({ events }) {
  if (events.length === 0) {
    return <h1>No Events To Show</h1>;
  }

  const renderEvents = events.map(event => (
    <div key={event.id}>
      <EventsCard event={event} />
    </div>
  ));
  return (
    <div>
      <h1>Events List</h1>
      {events && (
        <div className="my-4 lg:grid lg:grid-cols-2 lg:gap-2">
          {renderEvents}
        </div>
      )}
    </div>
  );
}
