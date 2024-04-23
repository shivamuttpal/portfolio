import React, { useState } from "react";
import Lottie from "lottie-react";
import loadingHandAnimation from "../lottieFiles/loadingHandAnim.json";

function Resume() {
  const [isLoading, setLoading] = useState(true);

  const handleDownload = () => {
    // Replace the file URL with your PDF file's URL
    const fileUrl =
      "https://drive.google.com/file/d/1-KiwA72zIulNbZCgo6oZJvGqmiQkxBOU/view?usp=sharing";
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.target = "_blank";
    anchor.download = "shivam-uttpal-cv.pdf"; 
    anchor.click();
  };

  return (
    <div className="bg-gradient-to-b from-bgDark to-bgDarkMute min-h-screen flex flex-col justify-center items-center gap-4">
      {isLoading && (
        <div className="text-content text-xl">
          <Lottie animationData={loadingHandAnimation} />
        </div>
      )}

      {!isLoading && (
        <div className="text-center mt-4  w-full fixed top-[3.75rem]">
          <button
            className="bg-amber-400 hover:bg-buttonMain text-content font-bold py-2 px-4 rounded-md"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      )}
      <div
        className={`h-screen w-screen mt-16 md:w-1/2 ${
          isLoading ? "hidden" : ""
        }`}
      >
        <iframe
          src="https://drive.google.com/file/d/1-KiwA72zIulNbZCgo6oZJvGqmiQkxBOU/preview"
          allow="autoplay"
          onLoad={() => setLoading(false)}
          title="Resume PDF"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
