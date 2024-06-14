import axios from "axios";
import { useEffect, useState } from "react";

export default function Table() {
  // State variable to store the list of users
  const [users, setUsers] = useState([]);

  // useEffect hook to load users when the component mounts
  useEffect(() => {
    async function loadUsers() {
      // Fetch the top users from the server
      const response = await fetch("http://127.0.0.1:8000/top_users", {
        method: "GET",
      }).then((res) => res.json().then((data) => setUsers(data)));
    }
    // Call the loadUsers function
    loadUsers();
  }, []);

  return (
    <div>
      {/* Main container with full screen dimensions, centered content, and background color */}
      <div className="w-full h-screen flex justify-center items-center m-0 p-0 bg-[#3B2A9F]">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          {/* Link to navigate back to the home page */}
          <a
            href="/"
            className="text-cyan-200 mt-2 text-2xl font-bold hover:drop-shadow-lg hover:scale-110 transition-all duration-200 mb-8"
          >
            Back To Home
          </a>
          {/* Table to display the list of users */}
          <table className="bg-black rounded-2xl table-auto font-bold w-1/3 text-center text-white border-collapse transition duration-150 hover:ring-4 ring-teal-400 ring-offset-[#3B2A9F] ring-offset-4 hover:scale-105">
            <thead className="text-2xl">
              <tr>
                <th>Row</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody className="text-xl">
              {/* Map over the users array to create a row for each user */}
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.victories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
