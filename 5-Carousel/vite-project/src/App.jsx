/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [imgs, setImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages(imgLimit) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=${imgLimit}&select=id,firstName,age,image`
      );
      const data = await response.json();
      setImgs(data.users);
      setIsLoading(false);
      console.log(imgs);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchImages(8);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="carousel-cont">
      <Carousel
        isLoading={isLoading}
        images={imgs}
        imagesPerSlide={2}
        imagesLimit={8}
        onImgClick={(image,idx)=>{}}
        customPvsBtn={(onClick) => (
          <button
            className="btn pvs"
            style={{ background: "red" }}
            onClick={onClick}
          >
            Prev
          </button>
        )}
        customNxtBtn={(onClick) => (
          <button
            className="btn nxt"
            style={{ background: "blue" }}
            onClick={onClick}
          >
            Prev
          </button>
        )}
      />
    </div>
  );
}

export default App;
