import { useState } from "react";

const Carousel = (props) => {
  const [currentIndex, setCurrentImg] = useState(1);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        className="w-full h-full flex carouselInner"
        style={{ backgroundImage: `url(${props.images[currentIndex].src})` }}
      >
        <div
          className="w-1/10 h-full flex items-center justify-center bg-black bg-opacity-20 text-white cursor-pointer text-9xl"
          onClick={() => {
            currentIndex > 0 && setCurrentImg(currentIndex - 1);
          }}
        >
          &lt;
        </div>
        <div className="w-full h-full bg-black bg-opacity-20 text-white">
          <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-6xl">
              QUEEN'S UNIVERSITY
              <br />
              PEOPLE WATCHING CLUB
            </h1>
            <p className="text-2xl">{props.images[currentIndex].subtitle}</p>
          </div>
        </div>
        <div
          className="w-1/10 h-full flex items-center justify-center bg-black bg-opacity-20 text-white cursor-pointer text-9xl"
          onClick={() => {
            currentIndex < props.images.length - 1 &&
              setCurrentImg(currentIndex + 1);
          }}
        >
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
