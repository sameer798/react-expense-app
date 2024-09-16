import React from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="flex justify-between p-5 bg-green-300 border-b-4">
      <div className="text-gray-800">Welcome to expense tracker</div>
      <div className="bg-gray-300 p-1 rounded-md">
        <Link to="/update-profile"><button className="text-s">
          Your profile is incomplete.<span className="text-blue-700">Complete Now</span>
        </button></Link>
      </div>
    </div>
  );
}

export default UserProfile;
