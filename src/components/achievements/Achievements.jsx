import React from "react";
import { Helmet } from "react-helmet";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";

function Blogs() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Carousel
          style={{ width: "70%", maxWidth: "800px", height: "50%" }}
          slideGap="md"
          controlsOffset="xs"
          controlSize={40}
          loop
          dragFree
        >
          <Carousel.Slide className=" w-[60vw] h-[60vh]"><img src="./hackmol.png" alt="" className="md:w-full md:h-full"/></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./Uhackathon.jpg" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./aiml.jpeg" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./codeflow.png" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./ssoc.png" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./aws.jpeg" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./hackstreet.jpeg" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
          <Carousel.Slide className="w-[60vw] h-[60vh]"><img src="./budd1.jpg" alt="" className="md:w-full md:h-full" /></Carousel.Slide>
        </Carousel>
      </div>
      <Helmet>
        <title>Shivam | Achievements</title>
      </Helmet>
    </>
  );
}

export default Blogs;
