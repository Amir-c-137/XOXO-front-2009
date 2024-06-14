import Start from "../components/start";

export default function HomePage() {
  return (
    // Main container for the home page with full width and height, centered vertically, and with a background color
    <div className="w-full h-screen flex flex-col justify-between m-0 p-0 bg-[#3B2A9F]">
      
      {/* Logo section at the top, centered horizontally with a margin at the top */}
      <div className="flex justify-center mt-9">
        <img
          // Logo image with a fixed width, scaled and faded on hover
          className="w-72 object-contain transition duration-300 hover:scale-125 hover:opacity-50"
          src="./Logo.png"
          alt=""
        />
      </div>

      {/* Start component, assumed to handle starting the game or navigation */}
      <Start />

      {/* Footer section with the author's name, centered horizontally with a margin at the bottom */}
      <div className="flex justify-center mb-4">
        <h1 className="text-orange-300 font-bold text-xl">
          Proved By AmirhosseinIzadi
        </h1>
      </div>
    </div>
  );
}
