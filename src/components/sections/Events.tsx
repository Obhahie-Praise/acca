import { mockEvents } from "@/constants";
import { Calendar, Search } from "lucide-react";
import Link from "next/link";

const Events = () => {
  return (
    <section className="py-16 px-4 md:px-8 mt-20" id="events">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold py-1">
            Upcoming Events
          </h2>
          <p className="text-gray-600">
            Discover and join amazing events happening in Africa
          </p>
        </div>

        <div className="flex justify-center my-6">
          <form className="flex items-center justify-center pl-4 gap-2 border border-blue-500 rounded-lg">
            <Search width={20} height={20} className="text-blue-500" />
            <input
              type="text"
              className="h-full px-1 focus:outline-none"
              placeholder="Search For Events"
            />
            <Link
              href=""
              type="submit"
              className="bg-blue-500 py-1.5 px-3 font-medium text-white rounded-lg hover:bg-blue-400 transition-colors"
            >
              Search
            </Link>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Event Image */}
              <div className="h-48 overflow-hidden bg-gray-200">
                <img
                  loading="lazy"
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Event Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex gap-2 mb-2 font-medium">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Event Name */}
                <h3 className="text-xl font-semibold mb-1 line-clamp-2">
                  {event.name}
                </h3>

                {/* Event Description */}
                <p className="text-zinc-500 text-sm mb-3 line-clamp-2">
                  {event.description}
                </p>

                {/* Location & Type */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                    <span className="font-medium">{event.location}</span>
                    {event.isVirtual && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                        Virtual
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <div className="flex gap-1 items-center mb-4">
                    <Calendar width={13} height={13} className="text-zinc-600" />
                    <p className="text-sm text-zinc-600">
                      {new Date(event.startDateTime).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div className="text-sm">
                    {event.spotsLeft > 0 ? (
                      <span className="text-green-600 font-medium">
                        {event.spotsLeft} spots left
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">Sold Out</span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 capitalize bg-gray-100 px-3 py-1 rounded">
                    {event.registrationType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
