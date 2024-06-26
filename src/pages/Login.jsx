import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Hook to navigate programmatically
  const navigate = useNavigate();
  // State to manage hover effect on the back button
  const [isHovered, setIsHovered] = useState(false);
  
  // Function to handle form submission
  function setname(e) {
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { player1, player2 } = data;
    // Check if both player names are provided
    if (player1 !== "" && player2 !== "") {
      // Store player names in local storage and navigate to the game design page
      localStorage.setItem("names", `${player1}_${player2}`);
      navigate("/gamedesign");
    }
  }

  return (
    <div>
      {/* Full screen container with background color and centered content */}
      <div className="h-screen flex items-center justify-center bg-[#3B2A9F]">
        <div className="p-6 shadow-lg rounded-xl bg-black">
          <div className="flex justify-center content-center gap-2 mb-5">
            {/* Link to go back to the previous page */}
            <a className="text-white content-center" href=".">
              <div
                className="cursor-pointer"
                // Toggle hover state for back button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Change back button icon based on hover state */}
                {isHovered ? (
                  <svg
                    width="28"
                    height="28"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                  </svg>
                ) : (
                  <svg
                    width="28"
                    height="28"
                    fill="white"
                    className="bi bi-arrow-left-circle-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                    />
                  </svg>
                )}
              </div>
            </a>
            <h1 className="text-white text-3xl content-center font-bold">
              Fill The Form
            </h1>
          </div>
          {/* Form to input player names */}
          <form onSubmit={setname}>
            <label
              className="flex justify-center content-center flex-col gap-2 mb-3"
              htmlFor=""
            >
              <h1 className="font-bold text-white text-xl">Player ONE :</h1>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="player1"
                placeholder="Enter The Name"
              />
            </label>
            <label
              className="flex justify-center content-center flex-col gap-1"
              htmlFor=""
            >
              <h1 className="font-bold text-white text-xl">Player TWO :</h1>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="player2"
                placeholder="Enter The Name"
              />
            </label>
            <div className="flex content-center justify-center mt-4">
              <button
                type="submit"
                className="text-white bg-orange-400 rounded-md py-1 px-2 hover:scale-x-110 hover:bg-orange-500 hover:font-semibold transition duration-100"
              >
                Play Game
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
