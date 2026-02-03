import { MapPin } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "BINUS Alam Sutera",
      lat: -6.223205014001816,
      lng: 106.64903680983876,
    },
    {
      name: "BINUS Kemanggisan Anggrek",
      lat: -6.201758144556543,
      lng: 106.78225504708314,
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="section-title">Our Locations</h2>
        <p className="text-lg text-gray-700">
          Find us at these BINUS University campuses
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location) => (
          <div key={location.name} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-4 bg-chessBlue text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <h3 className="font-semibold text-lg">{location.name}</h3>
            </div>
            <div className="aspect-video">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMjMuNSJTIDEwNsKwMzgnNTYuNSJF!5e0!3m2!1sen!2sid!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${location.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsSection;
