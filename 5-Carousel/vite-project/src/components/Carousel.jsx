/* eslint-disable no-unused-vars */

import { useState, useRef, useEffect } from "react";

/* eslint-disable react/prop-types */
const Carousel = ({
  isLoading = false,
  images = [],
  imagesPerSlide,
  imagesLimit = images.length,
  onImgClick,
  customPvsBtn,
  customNxtBtn,
}) => {
  const [imgWidth, setImgWidth] = useState();
  const [curIdx, setCurIdx] = useState(0);

  const onPvs = () =>
    setCurIdx((pvs) => (pvs === 0 ? imagesLimit - 1 : pvs - 1));
  const onNxt = () =>
    setCurIdx((pvs) => (pvs === imagesLimit - 1 ? 0 : pvs + 1));

  useEffect(() => {
    if (images.length > 0) {
      setCurIdx(0);
    }
  }, [images]);

  const imgRef = useRef(null);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="carousel" style={{ width: imagesPerSlide * imgWidth }}>
      <div
        className="img-cont"
        style={{ transform: `translateX(-${curIdx * imgWidth}px)` }}
      >
        {images
          .slice(0, imagesLimit > images.length ? images.length : imagesLimit)
          .map((image, idx) => (
            <img
              onLoad={() => setImgWidth(imgRef.current.offsetWidth)} //By the time img loads this will be xero hence state variable is used and set was done on load
              ref={imgRef}
              key={image.id}
              src={image.image}
              alt={image.firstName}
              onClick={() => onImgClick(image, idx)}
              className="image"
            />
          ))}
      </div>
      {customPvsBtn instanceof Function ? (
        customPvsBtn(onPvs)
      ) : (
        <button className="pvs btn" onClick={onPvs}>
          prev
        </button>
      )}
      {customNxtBtn instanceof Function ? (
        customNxtBtn(onNxt)
      ) : (
        <button className="nxt btn" onClick={onNxt}>
          nxt
        </button>
      )}
    </div>
  );
};

export default Carousel;
