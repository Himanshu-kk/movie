import React from "react";

const MovieWatch = ({ watchLink, onClose }) => {
  if (!watchLink) return null; // ✅ safe check

  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      <iframe
        src={watchLink}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        scrolling="no"
        title="MoviesFear Watch Player"
      ></iframe>

      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg shadow-lg"
      >
        ✖ Close
      </button>
    </div>
  );
};

export default MovieWatch;
