import { MapPin } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "BINUS Kemanggisan Anggrek",
      lat: -6.201758144556543,
      lng: 106.78225504708314,
    },
    {
      name: "BINUS Alam Sutera",
      lat: -6.223205014001816,
      lng: 106.64903680983876,
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
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=18&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
