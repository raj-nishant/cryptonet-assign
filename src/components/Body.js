import React from "react";
import Shimmer from "./Shimmer";
import useGetDataFromApi from "../utils/useGetDataFromApi";

const Body = () => {
  //getting data from api. Created custom hook for that
  const user = useGetDataFromApi();

  return user.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="h-[68vh] bg-gradient-to-r from-purple-400 to-indigo-500">
      <div className="flex justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-8 flex items-center transition-transform transform hover:translate-y-[-5px] hover:shadow-lg">
          <div className="flex-shrink-0">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full h-36 w-36 object-cover border-4 border-purple-500 transition-transform transform hover:scale-105"
            />
          </div>

          <div className="ml-6">
            <div className="text-3xl font-bold text-gray-800 transition-opacity hover:opacity-80">
              {user.name.first} {user.name.last}
            </div>
            <div className="text-lg text-gray-600">{user.gender}</div>
            <div className="text-lg text-gray-600">{user.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
