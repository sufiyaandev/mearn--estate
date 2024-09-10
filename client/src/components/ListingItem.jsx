import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  return (
    <div className="m-4 bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnewinzurich.com%2Fhotels%2Fthe-hide-hotel-flims-switzerland%2F&psig=AOvVaw1lTCXF2Gt17YtpPPM_H8GE&ust=1726058343303000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjO4cWyuIgDFQAAAAAdAAAAABAE"
          }
          alt="listing cover"
          className="h-[320px] sm:h[220px] w-full object-cover hover:scale-105 transition-scale duration-300 "
        />
        <div className="p-3 flex-col flex gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700 ">
            {listing.name}{" "}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="w-full text-sm text-gray-600 truncate">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && "/ month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs ">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className="font-bold text-xs ">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
