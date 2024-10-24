import "./slider.scss";
import { useState } from "react";

export default function Slider(props) {
  const { images } = props;
  const [imgIndex, setImgIndex] = useState(null);
  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1);
      } else {
        setImgIndex(imgIndex - 1);
      }
    } else {
      if (imgIndex === images.length - 1) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }
  };
  return (
    <div className="slider">
      {imgIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" onClick={() => changeSlide("left")} alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              onClick={() => changeSlide("right")}
              alt=""
            />
          </div>
          <div className="close" onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImg">
        {/* arrow function prevent infinite loop error*/}
        <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
      </div>
      <div className="smallImgs">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => setImgIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}
