
export default function CityCard({ city }) {
    return (
      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
        <img
          src={city.image}
          alt={city.name}
          className="object-cover w-full h-64 transition-transform group-hover:scale-110 duration-200"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <h2 className="p-4 text-white font-bold text-2xl">
            {city.name}
          </h2>
        </div>
      </div>
    );
  }
  