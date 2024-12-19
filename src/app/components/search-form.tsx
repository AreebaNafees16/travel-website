import { Search } from "lucide-react";

export function SearchForm() {
  return (
    <form className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-end bg-white p-6 shadow-lg rounded-md">
      {/* Search Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="search" className="text-sm font-medium text-gray-600">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search for tours or locations"
          className="py-2 px-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Destination Select */}
      <div className="flex flex-col gap-2">
        <label htmlFor="destination" className="text-sm font-medium text-gray-600">
          Destination
        </label>
        <select
          id="destination"
          className="py-2 px-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
        >
          <option value="">Select Destination</option>
          <option value="dubai">Dubai</option>
          <option value="canada">Canada</option>
          <option value="america">America</option>
          <option value="paris">Paris</option>
          <option value="maldives">Maldives</option>
        </select>
      </div>

      {/* Travel Type Select */}
      <div className="flex flex-col gap-2">
        <label htmlFor="travelType" className="text-sm font-medium text-gray-600">
          Travel Type
        </label>
        <select
          id="travelType"
          className="py-2 px-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
        >
          <option value="">Select Type</option>
          <option value="honeymoon">Honeymoon</option>
          <option value="adventure">Adventure</option>
          <option value="family">Family</option>
          <option value="luxury">Luxury</option>
          <option value="budget">Budget</option>
        </select>
      </div>

      {/* Date Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-sm font-medium text-gray-600">
          Travel Date
        </label>
        <input
          id="date"
          type="date"
          className="py-2 px-3 outline-none border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-teal-400 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-teal-500 transition-colors"
      >
        <Search size={20} />
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}
