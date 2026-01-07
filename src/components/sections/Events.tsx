import React from "react";
import { mockEvents } from "@/constants";

const Events = () => {
  return (
    <section className="py-16 px-4 md:px-8 mt-30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold py-1">
            Upcoming Events
          </h2>
          <p className="text-gray-600">
            Discover and join amazing events happening in Africa
          </p>
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
                  <p className="text-sm text-gray-600 mb-4">
                    {new Date(event.startDateTime).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
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
