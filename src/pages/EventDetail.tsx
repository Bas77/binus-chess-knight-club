
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getEventById } from "@/data/events";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();

  console.log("EventDetail component loaded, id:", id);

  if (!id) {
    console.log("No ID parameter found");
    return <Navigate to="/events" replace />;
  }

  const event = getEventById(id);
  console.log("Found event:", event);

  if (!event) {
    console.log("Event not found for id:", id);
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
            <p className="text-gray-600 mb-8">
              The event you're looking for doesn't exist.
            </p>
            <Button asChild className="bg-chessBlue hover:bg-chessBlue-light">
              <a href="/events">Back to Events</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4">
            <Button
              asChild
              className="mb-6 bg-white text-chessBlue hover:bg-gray-100"
            >
              <a href="/events">← Back to Events</a>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {event.title}
            </h1>
            <div className="text-xl mb-4">
              <p className="mb-2">📅 {event.date}</p>
              <p>📍 {event.location}</p>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-chessBlue">
                  About This Event
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {event.fullDescription}
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>
                      <strong>Type:</strong>{" "}
                      {event.type === "upcoming"
                        ? "Upcoming Event"
                        : "Past Event"}
                    </p>
                  </div>
                </div>

                {event.type === "upcoming" && (
                  <div className="space-y-4">
                    {event.registrationLink ? (
                      <Button asChild className="w-full bg-chessBlue hover:bg-chessBlue-light">
                        <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                          Register Now
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full bg-chessBlue hover:bg-chessBlue-light">
                        Register for Event
                      </Button>
                    )}
                    <Button asChild variant="outline" className="w-full">
                      <a href="/contact">Contact for More Info</a>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery for Past Events */}
        {event.type === "past" && event.gallery && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-chessBlue">
                Event Gallery
              </h2>
              <div className="max-w-4xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {event.gallery.map((photo, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img
                            src={photo}
                            alt={`${event.title} photo ${index + 1}`}
                            className="w-full h-96 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <p className="text-center text-gray-600 mt-4">
                  {event.gallery.length} photos from {event.title}
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
